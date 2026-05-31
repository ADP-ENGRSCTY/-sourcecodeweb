import type { Metadata } from "next";
import type { Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADP Engineering Society | Taylor's University",
  description: "Building, learning, and leading — together. Join the ADP Engineering Society to grow through hands-on workshops, industry visits, and competitions.",
  keywords: ["ADP", "Engineering", "Taylor's University", "Student Society", "Workshops", "Malaysia"],
  authors: [{ name: "ADP Engineering Society" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: "ADP Engineering Society",
    description: "Building, learning, and leading — together",
    type: "website",
    locale: "en_US",
    siteName: "ADP Engineering Society",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADP Engineering Society",
    description: "Building, learning, and leading — together",
  },
};

export const viewport: Viewport = {
  themeColor: "#BB3A1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
