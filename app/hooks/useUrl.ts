import { updateStorage } from "@/heplers/updateStorage";
import { Place } from "@/types/types";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const useUrl = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [paramsObject, setParamsObject] = useState({});

  // useEffect(() => {
  //   const paramsJson = Object.fromEntries(searchParams.entries());
  //   setParamsObject(paramsJson);
  // }, [searchParams]);

  const updateUrl = (query, term: any) => {
    const params = new URLSearchParams(searchParams);

    params.forEach((param) => console.log(param));

    if (query === "now" && term) {
      params.set("pickupdate", term[0]);
      params.set("pickuptime", term[1]);
      params.set("now", "now");
    } else {
      params.delete(query);
    }

    if (term && typeof term === "string") {
      params.set(query, term);
    } else {
      params.delete(query);
      if (query === "origin") {
        params.delete("pinpickup");
      }
      if (query === "destnation") {
        params.delete("pindestination");
      }
    }
    const paramsJson = Object.fromEntries(params.entries());
    setParamsObject(paramsJson);
    replace(`${pathname}?${params.toString()}`);
  };

  const updateLocationUrl = (query: "origin" | "destination", term: Place) => {
    const params = new URLSearchParams(searchParams);

    params.forEach((param) => console.log(param));

    if (query && term) {
      params.set(query + "location", query);
      params.set(query + "name", term.name);
      params.set(query + "address", term.address);
      params.set(query + "lat", term.lat);
      params.set(query + "lng", term.lng);
    } else {
      params.delete(query);
      params.delete(query + "name");
      params.delete(query + "address");
      params.delete(query + "lat");
      params.delete(query + "lng");
    }
    const paramsJson = Object.fromEntries(params.entries());
    setParamsObject(paramsJson);
    replace(`${pathname}?${params.toString()}`);
  };

  return { updateUrl, paramsObject, updateLocationUrl };
};

export default useUrl;
