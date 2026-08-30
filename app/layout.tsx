import type { Metadata } from "next";
import { IBM_Plex_Mono, Lora, Noto_Sans_Tamil, Noto_Serif_Tamil, Playfair_Display } from "next/font/google";
import { dad, masthead } from "@/lib/config";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
  title: `${masthead.paperName}: ${dad.name} ஓய்வூதிய சிறப்பு பதிப்பு`,
  description: `${dad.name} ${dad.yearsOfService} ஆண்டுகள் சேவைக்குப் பிறகு ஓய்வு பெறுவதை அறிவிக்கும் சிறப்பு பதிப்பு நாளிதழ். எங்களுடன் இணைந்து கொண்டாடுங்கள்.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ta"
      className={`${playfair.variable} ${lora.variable} ${plexMono.variable} ${notoSerifTamil.variable} ${notoSansTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
