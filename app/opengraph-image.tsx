import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Link-preview card for LinkedIn, Slack, X, WhatsApp etc. Rendered once at build time.
export const alt = "Rishabh Sharma: product-minded builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPER = "#f3ece0";
const INK = "#1d1813";
const SOFT = "#6e6155";
const TERRACOTTA = "#a9502b";

export default async function OpengraphImage() {
  const root = process.cwd();
  const [regular, italic, portrait] = await Promise.all([
    readFile(join(root, "assets/og/InstrumentSerif-Regular.ttf")),
    readFile(join(root, "assets/og/InstrumentSerif-Italic.ttf")),
    readFile(join(root, "public/images/portrait.png")),
  ]);
  const portraitSrc = `data:image/png;base64,${portrait.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPER,
          backgroundImage:
            "radial-gradient(circle at 88% 8%, rgba(242,197,138,0.75) 0%, rgba(242,197,138,0) 45%), radial-gradient(circle at 0% 100%, rgba(230,180,138,0.55) 0%, rgba(230,180,138,0) 40%)",
          padding: "56px 64px",
          fontFamily: "Instrument Serif",
          color: INK,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 24, color: SOFT, letterSpacing: 3 }}>
            <div style={{ width: 10, height: 10, borderRadius: 10, background: "#c9772f" }} />
            PORTFOLIO · 2026
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 150, lineHeight: 0.86, letterSpacing: -6 }}>Rishabh</div>
            <div style={{ fontSize: 150, lineHeight: 0.86, letterSpacing: -6, fontStyle: "italic", color: TERRACOTTA }}>
              Sharma
            </div>
            <div style={{ display: "flex", fontSize: 38, marginTop: 30, color: INK }}>
              <span>Product-minded builder:</span>
              <span style={{ fontStyle: "italic", color: TERRACOTTA, marginLeft: 10 }}>idea to deployment.</span>
            </div>
          </div>

          <div style={{ display: "flex", gap: 34, fontSize: 25, color: SOFT, borderTop: "1px solid rgba(29,24,19,0.2)", paddingTop: 20 }}>
            <span>170+ US school districts</span>
            <span>AI CRM · 50+ users</span>
            <span>TPM · Full stack · XR</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginLeft: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={portraitSrc}
            width={330}
            height={460}
            alt=""
            style={{ objectFit: "cover", borderRadius: "165px 165px 22px 22px" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: regular, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: italic, style: "italic", weight: 400 },
      ],
    }
  );
}
