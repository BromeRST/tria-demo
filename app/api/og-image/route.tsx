import { ImageResponse } from "next/og";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    color: "white",
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img src="https://tria-demo.vercel.app/brand/logo.svg" width={600} height={600} alt="og image" />
            </div>
        ),
        {
            width: 1200,
            height: 800,
        }
    );
}
