export const metadata = {
  title: "Book Online a ride with Aegean Taxi now",
  description:
    "Book Online a taxi ride in few easy steps and arrive to your destination in time",
};

import AppContextProvider from "@/context/appState";

export default function BookOnline({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
