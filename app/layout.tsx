import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashtagSpy – Track Competitor Hashtag Performance on Instagram",
  description: "Monitor competitor Instagram posts, analyze hashtag performance, and get AI-powered hashtag recommendations for your niche."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="bba7300e-00f1-4f08-a7e5-e7ee1a3ad59b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
