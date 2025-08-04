"use client";

import React, { ReactNode, useContext, useState, createContext } from "react";

export const EmailFormContext = createContext({
  isOpen: false,
  toggleOpen: () => {},
});

type Props = {
  children?: ReactNode;
};

export const EmailFormProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <EmailFormContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </EmailFormContext.Provider>
  );
};

export function useEmailForm() {
  return useContext(EmailFormContext);
}
