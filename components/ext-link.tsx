import type { AnchorHTMLAttributes } from "react";

/** Anchor that always opens in a new tab safely. */
export function ExtLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener" />;
}
