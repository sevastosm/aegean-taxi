import classNames from "classnames";
import { useRouter } from "next/navigation";
import React from "react";
import NavBack from "./NavBack";

type Props = {};

const ToolBar = ({
  toggleDrawer = () => false,
  isMapOpen,
  colapsed = true,
}: any) => {
  const style = classNames(
    "pointer",
    "h-[50px] w-[50px]",
    "p-2",
    "bg-white border border-#3b82f6 rounded-full",
    !isMapOpen && "rotate-180"
  );
  const router = useRouter();

  const handleClick = () => {
    router.back(); // Go back to the previous page
  };

  const click = () => {
    toggleDrawer();
  };

  return (
    <div className="flex md:hidden justify-between align-baseline px-4">
      <NavBack handleClick={handleClick} />
      {colapsed && (
        <div onClick={click} className={style}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
          </svg>
        </div>
      )}
    </div>
  );
};

export default ToolBar;
