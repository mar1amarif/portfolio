import { ImageResponse } from "next/og";
import { SITE } from "@/constants";

export const ogImageSize = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#050507",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0) 55%), radial-gradient(circle at 100% 100%, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0) 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "linear-gradient(135deg, #7c7cfb, #4f46e5)",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {SITE.name[0]}
          </div>
          <div style={{ display: "flex", fontSize: 28, color: "#9c9ca8" }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 600,
              color: "#f7f7f9",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              maxWidth: 980,
            }}
          >
            {SITE.role}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#9c9ca8",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {SITE.subheadline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "TypeScript", "WebRTC"].map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#c6c6cf",
                fontSize: 20,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...ogImageSize }
  );
}
