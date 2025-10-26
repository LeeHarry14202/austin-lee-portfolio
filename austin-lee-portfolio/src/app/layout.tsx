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
  openGraph: {
    title: "Austin Le - Photographer",
    description: "Photography portfolio showcasing visual stories and creative work",
    url: "https://www.austinle.com/",
    siteName: "Austin Le Photography",
    images: [
      {
        url: "https://res.cloudinary.com/djpmslpgu/image/upload/v1761454315/aboutmesocial_uww3u1.png",
        width: 1200,
        height: 630,
        alt: "Austin Le Photography Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Austin Le - Photographer",
    description: "Photography portfolio showcasing visual stories and creative work",
    images: ["https://res.cloudinary.com/djpmslpgu/image/upload/w_1200,h_630,c_pad,b_black,f_auto/v1761454315/aboutmesocial_uww3u1.jpg"],
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
