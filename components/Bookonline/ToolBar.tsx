import { Istate, useStore } from "@/app/(taxi)/store/store";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";
import NavBack from "./NavBack";

type Props = {};

const ToolBar = ({ colapsed = true }: any) => {
  const router = useRouter();
  const toogleMap = useStore((state: any) => state.toogleMap);
  const mapOpen = useStore((state: any) => state.mapOpen);

  const style = classNames(
    "pointer",
    "h-[50px] w-[50px]",
    "p-2",
    "bg-white border border-#3b82f6 rounded-full",
    !mapOpen && "rotate-180"
  );
  const handleClick = () => {
    router.back(); // Go back to the previous page
  };
  return (
    <div className='flex md:hidden justify-between align-baseline px-4'>
      <NavBack handleClick={handleClick} />
      {/* {colapsed && (
        <div onClick={toogleMap} className={style}>
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z'></path>
          </svg>
        </div>
      )} */}
    </div>
  );
};

export default ToolBar;
