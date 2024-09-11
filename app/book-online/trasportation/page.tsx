//components
import Drivers from "@/components/Bookonline/Drivers";
import { GoogleMapsProvider } from "@/components/Bookonline/GoogleMapsProvider";

export default function bookOnline() {
  return (
    <>
      <GoogleMapsProvider>
        <Drivers />
      </GoogleMapsProvider>
    </>
  );
}
