import type { CSSProperties } from "react";
import Image from "next/image";
import type { Media } from "@/lib/data";

type Props = {
  media: Media;
  hue: [string, string];
  className?: string;
  style?: CSSProperties;
  parallax?: number;
  sizes?: string;
};

/**
 * Real image when `media.src` is set, otherwise a warm generative placeholder.
 * Parallax drifts only the image/background layer so labels stay framed.
 */
export function Placeholder({ media, hue, className, style, parallax, sizes = "100vw" }: Props) {
  const vars = {
    "--ph-a": hue[0],
    "--ph-b": hue[1],
    aspectRatio: media.aspect,
    ...style,
  } as CSSProperties;

  return (
    <div className={`ph ${media.src ? "ph--photo" : ""} ${className ?? ""}`} style={vars}>
      {media.src ? (
        <>
          <Image
            src={media.src}
            alt={media.label}
            fill
            sizes={sizes}
            quality={82}
            data-parallax={parallax}
            style={{ objectFit: "cover", objectPosition: media.position ?? "50% 50%" }}
          />
          <span className="ph__caption">{media.label}</span>
        </>
      ) : (
        <>
          <div className="ph__bg" data-parallax={parallax} />
          <div className="ph__frame" />
          <div className="ph__inner">
            <span className="ph__tag">◌ Media coming soon</span>
            <span className="ph__label">{media.label}</span>
          </div>
        </>
      )}
    </div>
  );
}
