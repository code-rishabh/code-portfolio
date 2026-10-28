"use client";

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { onReady } from "@/lib/ready";

const optimised = (src: string, w = 1080) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=82`;
const WARM = "/images/portrait.png";
const COOL = "/images/me.png";

const vertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform sampler2D uWarm;
  uniform sampler2D uCool;
  uniform float uTime;
  uniform float uProgress;
  uniform float uHover;
  uniform float uVel;
  uniform vec2 uMouse;
  uniform vec2 uPlane;
  uniform vec3 uPaper;

  // Simplex 3D noise, Ashima Arts (MIT)
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fit a square image into the plane like object-fit: cover.
  vec2 cover(vec2 uv) {
    float r = uPlane.x / uPlane.y;
    vec2 s = r < 1.0 ? vec2(r, 1.0) : vec2(1.0, 1.0 / r);
    return (uv - 0.5) * s + 0.5;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uPlane.x / uPlane.y, 1.0);
    float d = distance(uv * aspect, uMouse * aspect);
    float n = snoise(vec3(uv * 3.2, uTime * 0.22));
    float n2 = snoise(vec3(uv * 3.2 + 7.3, uTime * 0.22));

    // Liquid ripple around the cursor, stronger when moving fast.
    float ripple = smoothstep(0.5, 0.0, d) * (0.55 + uVel * 2.2) * uHover;
    vec2 disp = vec2(n, n2) * 0.022 * ripple;
    disp += vec2(snoise(vec3(uv * 1.4, uTime * 0.1))) * 0.003;

    vec2 iuv = cover(uv + disp);
    iuv = (iuv - 0.5) * mix(0.82, 1.0, uProgress) + 0.5;

    float shift = 0.006 * ripple + 0.012 * (1.0 - uProgress);
    vec3 warm = vec3(
      texture2D(uWarm, iuv + vec2(shift, 0.0)).r,
      texture2D(uWarm, iuv).g,
      texture2D(uWarm, iuv - vec2(shift, 0.0)).b
    );
    vec3 cool = texture2D(uCool, iuv).rgb;

    // Golden hour -> blue hour window that blooms around the cursor.
    float r = uHover * 0.34;
    float m = smoothstep(r, r - 0.14, d + n * 0.07);
    vec3 col = mix(warm, cool, m);

    // Drifting light leak.
    vec2 leakPos = vec2(0.8 + 0.12 * sin(uTime * 0.25), 1.05);
    float leak = smoothstep(0.85, 0.0, distance(uv, leakPos));
    col += vec3(1.0, 0.68, 0.32) * leak * 0.14;

    // Entrance: rises from the bottom with an organic edge.
    float p = uProgress * 1.3;
    float visible = 1.0 - smoothstep(p - 0.18, p, 1.0 - uv.y + n * 0.08);
    col = mix(uPaper, col, visible);

    gl_FragColor = vec4(col, 1.0);
  }
`;

type Pointer = { x: number; y: number; tx: number; ty: number; hover: number; th: number; vel: number };

function Portrait({ pointer }: { pointer: React.MutableRefObject<Pointer> }) {
  const [warm, cool] = useLoader(THREE.TextureLoader, [optimised(WARM), optimised(COOL)]);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uWarm: { value: warm },
      uCool: { value: cool },
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uHover: { value: 0 },
      uVel: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uPlane: { value: new THREE.Vector2(1, 1) },
      uPaper: { value: new THREE.Color("#e2d5bf") },
    }),
    [warm, cool]
  );

  useEffect(() => {
    [warm, cool].forEach((t) => {
      t.minFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      t.needsUpdate = true;
    });
  }, [warm, cool]);

  useEffect(() => {
    uniforms.uPlane.value.set(size.width, size.height);
  }, [size, uniforms]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      uniforms.uProgress.value = 1;
      return;
    }
    let tween: gsap.core.Tween | undefined;
    const off = onReady(() => {
      tween = gsap.to(uniforms.uProgress, { value: 1, duration: 2.2, ease: "expo.out", delay: 0.35 });
    });
    return () => {
      off();
      tween?.kill();
    };
  }, [uniforms]);

  useFrame((_, delta) => {
    const p = pointer.current;
    const k = 1 - Math.pow(0.001, delta);
    const px = p.x;
    const py = p.y;
    p.x += (p.tx - p.x) * k * 0.9;
    p.y += (p.ty - p.y) * k * 0.9;
    p.hover += (p.th - p.hover) * k * 0.6;
    const v = Math.hypot(p.x - px, p.y - py) / Math.max(delta, 0.001);
    p.vel += (Math.min(v * 0.08, 1) - p.vel) * k * 0.4;

    uniforms.uTime.value += delta;
    uniforms.uMouse.value.set(p.x, p.y);
    uniforms.uHover.value = p.hover;
    uniforms.uVel.value = p.vel;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial vertexShader={vertex} fragmentShader={fragment} uniforms={uniforms} />
    </mesh>
  );
}

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function HeroCanvas() {
  const host = useRef<HTMLDivElement>(null);
  const pointer = useRef<Pointer>({ x: 0.5, y: 0.5, tx: 0.5, ty: 0.5, hover: 0, th: 0, vel: 0 });
  const [gl, setGl] = useState<boolean | null>(null);

  useEffect(() => setGl(hasWebGL()), []);

  useEffect(() => {
    const el = host.current?.parentElement;
    if (!el) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      pointer.current.tx = (e.clientX - r.left) / r.width;
      pointer.current.ty = 1 - (e.clientY - r.top) / r.height;
      pointer.current.th = 1;
    };
    const leave = () => (pointer.current.th = 0);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div ref={host} style={{ position: "absolute", inset: 0 }}>
      {gl === false && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={optimised(WARM, 828)} alt="Portrait of Rishabh Sharma" />
      )}
      {gl && (
        <Canvas flat linear dpr={[1, 2]} gl={{ antialias: false, alpha: false, powerPreference: "high-performance" }}>
          <Suspense fallback={null}>
            <Portrait pointer={pointer} />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
