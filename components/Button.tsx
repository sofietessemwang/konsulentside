'use client'
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  //variant er styling
  variant: string;
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, onClick }: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center gap-3 rounded-sm text-customprimary ${variant} w-40 h-12  px-10 cursor-pointer`}
      >
        {/* {icon && <Image src={icon} alt={title} width={25} height={24} />} */}
        <label className="font-bold text-base whitespace-nowrap cursor-pointer">
          {title}
        </label>
      </button>
    </>
  );
};

export default Button;
