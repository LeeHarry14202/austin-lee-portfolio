import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ppNeueMontreal = localFont({
  src: [
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-Book.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./../../public/fonts/PPNeueMontreal/PPNeueMontreal-SemiBolditalic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-pp-neue-montreal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Austin Le - Photographer",
  description: "Photography portfolio showcasing visual stories and creative work",
  icons: {
    icon: [
      { url: "/favicon-32x32.png?v=1", sizes: "32x32" },
      { url: "/Favicon.png?v=1", sizes: "any" },
    ],
    shortcut: "/favicon-32x32.png?v=1",
    apple: "/favicon-32x32.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ppNeueMontreal.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
