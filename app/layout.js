import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "MacroLens – Track Smarter, Eat Better",
  description:
    "MacroLens helps you scan meals, track macros, and reach your fitness goals with AI-powered food recognition, intermittent fasting, and achievement tracking.",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "MacroLens – Track Smarter, Eat Better",
    description:
      "Scan meals, track macros, and hit your fitness goals with AI-powered food recognition.",
    url: "https://macrolens.vercel.app",
    siteName: "MacroLens",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "MacroLens App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MacroLens – Track Smarter, Eat Better",
    description:
      "Scan meals, track macros, and hit your fitness goals with AI-powered food recognition.",
    images: ["/open-graph.png"],
  },
};

export const viewport = {
  themeColor: "#D67B48",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://kit.fontawesome.com/7279bfc684.js"
          crossOrigin="anonymous"
        ></script>
        <link rel="stylesheet" href="/css/navbar.css" />
        <link rel="stylesheet" href="/css/hero.css" />
        <link rel="stylesheet" href="/css/features.css" />
        <link rel="stylesheet" href="/css/cta.css" />
        <link rel="stylesheet" href="/css/footer.css" />
        <link rel="stylesheet" href="/css/changelog.css" />
        <link rel="stylesheet" href="/css/screenshots.css" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
