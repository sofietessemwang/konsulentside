"use client";
import { useEmailForm } from "@/context/EmailFormContext";
import React from "react";
import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  //variant er styling
  variant: string;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  opensEmailForm?: boolean;
};

const Button = ({
  type,
  title,
  icon,
  variant,
  size = "md",
  onClick,
  opensEmailForm = false,
}: ButtonProps) => {
  const { toggleOpen } = useEmailForm();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (opensEmailForm) {
      toggleOpen();
    }
    if (onClick) {
      onClick();
    }
  };

  const sizeClasses = {
    sm: "w-32 h-10 px-4 text-xs",
    md: "w-40 h-12 px-6 text-sm",
    lg: "w-48 h-14 px-8 text-lg",
  };
  return (
    <>
      <button
        type={type}
        onClick={handleClick}
        className={`flex items-center justify-center gap-3 rounded-full  text-customprimary ${variant} ${sizeClasses[size]} cursor-pointer `}
      >
        <label className="font-bold  whitespace-nowrap cursor-pointer">
          {title}
        </label>
        {icon && (<Image src={icon} alt={title} width={10} height={10} />)}
        
      </button>
    </>
  );
};

export default Button;
