import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Renders text as masked words that RevealManager slides up on scroll.
 * Wrap a phrase in *asterisks* to set it in italic accent.
 */
export function Split({ text, as: Tag = "h2", className, id }: Props) {
  const segments = text.split(/(\*[^*]+\*)/).filter(Boolean);

  return (
    <Tag className={className} id={id} data-split>
      {segments.map((seg, si) => {
        const italic = seg.startsWith("*") && seg.endsWith("*");
        const words = (italic ? seg.slice(1, -1) : seg).split(/\s+/).filter(Boolean);
        return words.map((w, wi) => (
          <span key={`${si}-${wi}`}>
            <span className="w">
              <span className="w-in">{italic ? <em>{w}</em> : w}</span>
            </span>{" "}
          </span>
        ));
      })}
    </Tag>
  );
}
