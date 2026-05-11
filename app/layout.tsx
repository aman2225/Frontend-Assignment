import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Propsoch Landing Page Rebuild",
  description:
    "A faster, clearer Propsoch landing page rebuild for the frontend engineering assignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
