import { SITE } from "@/constants";
import { renderOgImage, ogImageSize } from "@/lib/og";

export const runtime = "edge";
export const alt = `${SITE.name} — ${SITE.role}`;
export const size = ogImageSize;
export const contentType = "image/png";

export default function TwitterImage() {
  return renderOgImage();
}
