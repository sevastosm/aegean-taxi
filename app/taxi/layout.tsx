import { Metadata } from 'next';

export const metadata = {
  title:
    "Taxi App | Book Online 24/7| Mykonos, Santorini, Rhodes, Corfu, Paros+",
  description:
    "Aegean Taxi App: the best Taxi & Transfer service for the Greek Islands. Book a ride online, via whatsapp, telephone, or download the Taxi App. Available 24/7",
};

export default function TaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
