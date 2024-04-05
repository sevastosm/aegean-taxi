// components
import Script from "next/script";
import MainTemplate from "components/layout/template";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Ride with Aegean Taxi | The best taxi app for Greece | Book rides 24/7",
  description:
    "Aegean Taxi App: the best Taxi & Transfer service for the Greek Islands. Book a ride online, via whatsapp, telephone, or download the Taxi App. Available 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-Z7YJXM0X70"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Z7YJXM0X70');
        `}
      </Script>
      <body>
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
