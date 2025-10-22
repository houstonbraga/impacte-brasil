import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Impacte Brasil",
  description: "Web site oficial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
