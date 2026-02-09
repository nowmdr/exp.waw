import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Anton, Inter, Montserrat } from "next/font/google";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--anton",
});
const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--inter",
});
const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--montserrat",
});

export const metadata: Metadata = {
  title: "Experimental Dance Community – Exchange, Movement & Ideas",
  description:
    "A collaborative space for experimental dance and movement. Connect with a community of dancers, share ideas, explore new practices, and exchange experiences across styles, bodies, and perspectives.",
  keywords: [
    "experimental dance",
    "dance community",
    "movement research",
    "dance exchange",
    "improvisation",
    "contemporary dance",
    "somatic practices",
    "embodied practice",
    "choreography",
    "dance ideas",
    "dance workshops",
    "creative movement",
  ],
  openGraph: {
    title: "Experimental Dance Community – Exchange, Movement & Ideas",
    description:
      "Join a collaborative space for experimental dance and movement. Share ideas, practices, and experiences with a global community of movers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3SVZZTS31Z"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3SVZZTS31Z');
          `}
        </Script>
      </head>
      <body
        className={`${anton.variable} ${inter.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
