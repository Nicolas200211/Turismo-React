import type { Metadata } from "next";
import { Playwrite_AU_SA } from "next/font/google";
import "./globals.css";

const playwriteFont = Playwrite_AU_SA({
  variable: "--font-playwrite",
  weight: ["100", "200", "300", "400"],
});

export const metadata: Metadata = {
  title: "Turismo Next",
  description: "Generated por NOVA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playwriteFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
