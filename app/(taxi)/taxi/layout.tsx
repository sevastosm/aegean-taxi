import { Metadata } from 'next';

export const metadata = {
  title:
    "Taxi App | Book Online 24/7| Mykonos, Santorini, Rhodes, Corfu, Paros+",
  description:
    "Book a taxi and transfer in Greece. Book a ride with the Taxi App, online, whatsapp, or call center. Quality cars, cheap prices, English speaking. Open 24/7",
};

export default function TaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
