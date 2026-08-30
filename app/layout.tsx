import type { Metadata } from "next";
import { IBM_Plex_Mono, Playfair_Display, PT_Serif, UnifrakturCook } from "next/font/google";
import { officer } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const ptSerif = PT_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const masthead = UnifrakturCook({
  variable: "--font-masthead",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: `The Retirement Times: ${officer.name}'s Final Report`,
  description: `A special-edition newspaper honouring ${officer.name}'s ${officer.totalService} of service. Come celebrate the final shift.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ptSerif.variable} ${plexMono.variable} ${masthead.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
