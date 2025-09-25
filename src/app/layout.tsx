import type { Metadata } from "next";
import { Montserrat, Red_Hat_Display } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talent Token",
  description: "THE BACKBONE TOKEN OF THE FUTURE MEGA CITY",
}

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const redhatdisplay = Red_Hat_Display ({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redhatdisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
