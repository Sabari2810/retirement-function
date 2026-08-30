import type { Metadata } from "next";
import { Playfair_Display, PT_Serif, UnifrakturCook } from "next/font/google";
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

const masthead = UnifrakturCook({
  variable: "--font-masthead",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "You're Invited: Prabhakaran's Retirement Celebration",
  description:
    "A special-edition invitation to celebrate 38 wonderful years and toast to Prabhakaran's next chapter.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ptSerif.variable} ${masthead.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
