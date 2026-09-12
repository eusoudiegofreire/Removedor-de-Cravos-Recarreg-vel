import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#F8F5EF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#222222",
          }}
        >
          <span>Amazol</span>
          <span style={{ color: "#00B8C8" }}>é</span>
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 30,
            color: "#666666",
            display: "flex",
          }}
        >
          Clareador Esfoliante Corporal
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 28,
            fontWeight: 700,
            color: "#ffffff",
            background: "#C6008F",
            padding: "14px 32px",
            borderRadius: 999,
            display: "flex",
          }}
        >
          {site.ctaLabel}
        </div>
      </div>
    ),
    size,
  );
}
