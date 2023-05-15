import { Metadata } from 'next';

export const metadata = {
  title:
    "Taxi App, Affordable Taxi rides in Athens, Mykonos, Santorini | Available 24/7 ",
  description:
    "The easiest way to book your taxi and transfer in Greece. Book in 2 simple steps. Quality cars, cheapest prices, english speaking drivers",
};

export default function TaxiLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
