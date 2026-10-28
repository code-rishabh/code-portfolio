import type { CSSProperties } from "react";
import type { Media } from "@/lib/data";

type Props = {
  media: Media;
  hue: [string, string];
  className?: string;
  style?: CSSProperties;
  parallax?: number;
};

/**
 * Real image when `media.src` is set, otherwise a warm generative placeholder.
 * Parallax drifts only the background layer so labels stay framed.
 */
export function Placeholder({ media, hue, className, style, parallax }: Props) {
  const vars = {
    "--ph-a": hue[0],
    "--ph-b": hue[1],
    aspectRatio: media.aspect,
    ...style,
  } as CSSProperties;

  return (
    <div className={`ph ${className ?? ""}`} style={vars}>
      {media.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={media.src} alt={media.label} loading="lazy" data-parallax={parallax} />
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
