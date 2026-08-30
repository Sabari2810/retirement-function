import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_Tamil, Noto_Serif_Tamil, Playfair_Display, PT_Serif, UnifrakturCook } from "next/font/google";
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
  title: `ஓய்வு காலம்: ${officer.name} அவர்களின் இறுதி அறிக்கை`,
  description: `${officer.name} அவர்களின் ${officer.totalService} சேவையைப் போற்றும் சிறப்பு பதிப்பு நாளிதழ். இறுதிப் பணியைக் கொண்டாட வாருங்கள்.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ta"
      className={`${playfair.variable} ${ptSerif.variable} ${plexMono.variable} ${masthead.variable} ${notoSerifTamil.variable} ${notoSansTamil.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
