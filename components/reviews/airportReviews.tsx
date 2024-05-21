"use client";
import { useParams } from "next/navigation";

import AirportLandingReviews from "@/components/reviews/airportLanding";

export default function AirportReviews() {
  const params: any = useParams();
  return <AirportLandingReviews location={params.location} />;
}

reviews: [
  {
    flag: "uk",
    dateName: "Oliver - August 2021",
    text: `We booked our Athens Mykonos and Santorini Airport transfers via the Aegean Taxi website. The whole process was a breeze! But the surprise came after the first rice, we got an brand new Mercedes SUV, and all their cars were similar. Impressed by their professional drivers who provides smooth rides to the airport. Competitive pricing and quality service, they are open 24/7 with a polite and helpfull call center! i am obliged to reccomend them for anyone needing airport transfers in Greece!`,
  },
  {
    flag: "italy",
    dateName: "Marco - May 2022",
    text: `Look no further! If you are going on holidays in Greece and want a reliable Airport transfer company as well as cab rides for all islands, Aegean Taxi is the only solution. The Taxi app works really well, they have a customer service line open 24/7, and kept us informed on everything all along the way! Well done Aegean Taxi!`,
  },
  {
    flag: "america",
    dateName: "James - August 2021",
    text: `Choosing Aegean Taxi was an easy decision for my airport transfers. They came highly recommended by our friends who used them a few years before for Airport transfers in Rhodes and Corfu. I made the first booking with a phonecall, the price was fair, and the service was top-notch. From then on we used whatsapp to book our rides, and we had direct communication with our drivers.`,
  },
