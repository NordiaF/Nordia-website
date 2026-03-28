import { ImageResponse } from "next/og";

export const alt = "Nordia Foundation";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #153e8a 45%, #f2b665 100%)",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "0.35em",
            marginBottom: 24,
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          Nordia Foundation
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          Empowering communities through truth-driven education
        </div>
      </div>
    ),
    size,
  );
}
