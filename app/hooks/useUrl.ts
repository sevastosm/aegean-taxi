import { updateStorage } from "@/heplers/updateStorage";
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
    }
    const paramsJson = Object.fromEntries(params.entries());
    setParamsObject(paramsJson);
    replace(`${pathname}?${params.toString()}`);
  };

  return { updateUrl, paramsObject };
};

export default useUrl;
