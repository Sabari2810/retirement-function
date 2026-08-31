import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Noto_Sans_Tamil,
  Noto_Serif_Tamil,
  Playfair_Display,
  PT_Serif,
  UnifrakturCook,
} from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import { content } from "@/lib/content.en";
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

const notoSerifTamil = Noto_Serif_Tamil({
  variable: "--font-display-ta",
  subsets: ["tamil"],
  weight: ["700", "900"],
});

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-sans-ta",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ptSerif.variable} ${plexMono.variable} ${masthead.variable} ${notoSerifTamil.variable} ${notoSansTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
