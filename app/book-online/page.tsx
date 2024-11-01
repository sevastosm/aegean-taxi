//components
import BookOnline from "@/components/Bookonline/BookOnline";
import { GoogleMapsProvider } from "@/components/Bookonline/GoogleMapsProvider";
import TaxiLocations from "@/components/TaxiLocations";

export default function bookOnline() {
  return (
    <div className='flex flex-col h-[calc(100dvh-70px)]'>
      <TaxiLocations />
    </div>
  );
}
