import { ImageResponse } from "next/og";

export const alt = "Wellfind Academic — Home Tuition Services in Patna";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#101D36",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "58px",
              height: "58px",
              borderRadius: "14px",
              backgroundColor: "#35D0BA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#101D36",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "36px", fontWeight: "bold", color: "#FFFFFF" }}>
              Wellfind <span style={{ color: "#35D0BA" }}>Academic</span>
            </span>
            <span
              style={{
                fontSize: "13px",
                letterSpacing: "2px",
                color: "#94A3B8",
                textTransform: "uppercase",
                fontWeight: "600",
              }}
            >
              HOME TUITION SERVICES
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#35D0BA",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
            }}
          >
            PERSONALISED LEARNING FOR EVERY CHILD
          </div>
          <div
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#FFFFFF",
              lineHeight: 1.15,
              maxWidth: "1000px",
            }}
          >
            The right tutor. A brighter future.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#D0DBE5",
              maxWidth: "900px",
            }}
          >
            “Apne Bachche Ke Liye, Sahi Teacher Chuniye.” — Managed one-to-one home education for UKG to Class 10 students in Patna
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #1E3154",
            paddingTop: "24px",
          }}
        >
          <span style={{ color: "#A4B3C6", fontSize: "18px" }}>
            CBSE • ICSE • Bihar Board • Patna &amp; Suburbs
          </span>
          <span
            style={{
              backgroundColor: "#35D0BA",
              color: "#101D36",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            wellfindacademic.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
