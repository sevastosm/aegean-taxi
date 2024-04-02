// components
import Script from "next/script";
import MainTemplate from "components/layout/template";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "The #1 Taxi for the Greek Islands | Available 24/7 | Book now or later",
  description:
    "Aegean Taxi App is the Best way to book a ride in the Greek Islands. To book for now or later simply download the Aegean Taxi App, use the 24/7 call center, book online or via whatsapp",
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
