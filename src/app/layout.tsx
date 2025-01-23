import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const mainFont = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Life",
  description: "Count your days",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.className}`}>
        <div className="grid min-h-svh w-full grid-rows-[1fr,auto]">
          {children}
        </div>
      </body>
    </html>
  );
}
