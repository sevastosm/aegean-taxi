export const metadata = {
  title:
    "Online Taxi Booking | Available 24/7| Check Price and Book in 2 Steps",
  description:
    "Book a Taxi online. Available 24/7. Ride in Mykonos, Santorini, Paros, Rhodes, Corfu, Heraklion, Milos, Tinos, Naxos, Kos, Kea, Kefalonia, Tinos, Bodrum, Athens",
};

import { GoogleMapsProvider } from "@/components/Bookonline/GoogleMapsProvider";
import AppContextProvider from "@/context/appState";

export default function BookOnline({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContextProvider>
      <GoogleMapsProvider>{children}</GoogleMapsProvider>
    </AppContextProvider>
  );
}
