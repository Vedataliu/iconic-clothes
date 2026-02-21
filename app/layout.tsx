import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ICONIC CLOTHES KS",
  description:
    "Online sale of custom jackets. Iconic and vintage jackets from world-renowned brands. Instagram @iconic_clothes_ks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('iconic-clothes-theme');document.documentElement.classList.add(t==='light'?'light':'dark');document.documentElement.classList.remove(t==='light'?'dark':'light');})();`,
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
