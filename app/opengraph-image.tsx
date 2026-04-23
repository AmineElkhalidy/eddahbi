import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, #E6F4EA 0%, #3CB059 50%, #148046 100%)",
          color: "#0B5D34",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.86)",
            borderRadius: "24px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 600 }}>
            Dr. Youssef Eddahbi Clinic
          </div>
          <div style={{ fontSize: 62, fontWeight: 700, lineHeight: 1.1 }}>
            General Practitioner
          </div>
          <div style={{ fontSize: 32, fontWeight: 500 }}>
            Marrakech, Morocco
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
