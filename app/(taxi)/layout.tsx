// components
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import MainTemplate from "components/layout/template";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css";

export const metadata = {
  title:
    "Ride with Aegean Taxi | The best taxi app for Greece | Book rides 24/7",
  description:
    "Aegean Taxi App: the best Taxi & Transfer service for the Greek Islands. Book a ride online, via whatsapp, telephone, or download the Taxi App. Available 24/7",
  other: {
    thumbnail:
      "https://aegeantaxi.com/_next/static/media/ECONOMY_yellow.665a091a.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={"GTM-T4T7VVQ"} />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4T7VVQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript)  */}
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
