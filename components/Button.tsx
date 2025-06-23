"use client";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  //variant er styling
  variant: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
};

const Button = ({
  type,
  title,
  icon,
  variant,
  size = "md",
  onClick,
}: ButtonProps) => {
  const sizeClasses = {
    sm: "w-32 h-10 px-4 text-sm",
    md: "w-40 h-12 px-6 text-base",
    lg: "w-48 h-14 px-8 text-lg",
  };
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center gap-3 rounded-sm text-customprimary ${variant} ${sizeClasses[size]} cursor-pointer`}
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
