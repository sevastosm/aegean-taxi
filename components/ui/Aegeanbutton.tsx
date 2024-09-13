import classNames from "classnames";
import React from "react";

type Props = {};

const Aegeanbutton = ({
  props,
  onClick,
  label,
  extraClassNames,
  children,
}: any) => {
  const style = classNames("flex items-center", extraClassNames);
  return (
    <button
      {...props}
      onClick={onClick}
      className="bg-[#264388] focus:ring focus:ring  flex items-center justify-center w-full rounded-lg py-3 font-bold text-lg text-white "
    >
      <div className={style}>
        {label}
        {children}
      </div>
    </button>
  );
};

export default Aegeanbutton;
