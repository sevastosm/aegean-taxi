import { useSearchParams, useRouter, usePathname } from "next/navigation";

const useUrl = () => {

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();


  const updateUrl = (query, term) => {
    const params = new URLSearchParams(searchParams);



    if (term) {
      params.set(query, term);
    } else {
      if (query === 'origin') {
        params.delete(query);
      }
      params.delete('destination');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return { updateUrl };
}

export default useUrl