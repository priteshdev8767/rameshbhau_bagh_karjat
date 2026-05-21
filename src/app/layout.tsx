import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rameshbhau Bagh Resort | Luxury Nature Stay in Karjat",
  description: "Experience luxury in nature at Rameshbhau Bagh Resort, Karjat. Private pool, BBQ nights, relaxing vibes for family, friends, and corporate stays.",
  keywords: "Karjat resort, luxury stay Karjat, private pool villa Karjat, Rameshbhau Bagh, nature resort Mumbai Pune",
  openGraph: {
    title: "Rameshbhau Bagh Resort | Karjat",
    description: "Luxury Nature Stay in Karjat with Private Pool & BBQ",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${playfair.variable} antialiased selection:bg-brand-emerald selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
