"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Link from "next/link";
import { useEmailForm } from "@/context/EmailFormContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, toggleOpen } = useEmailForm();
  const [isSubOpen, setIsSubOpen] = useState(false);
  const submenuRef = useRef<HTMLLIElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleSub = () => {
    setIsSubOpen(!isSubOpen);
  };

  const closeSub = () => {
    setIsSubOpen(false);
  };

  // Click outside handler for submenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target as Node)
      ) {
        closeSub();
      }
    };

    if (isSubOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubOpen]);

  return (
    <>
      <div className="navbar z-50 fixed top-0">
        <div className="navbar-start">
          {/* Mobile hamburger/close button */}
          <div className="lg:hidden">
            <button
              className="btn btn-ghost"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Toggle menu"}
            >
              {isMenuOpen ? (
                // Close (X) icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <a className="text-xl" href="/">
            Ronny Wang
          </a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex rounded-full bg-white">
          <ul className="inline-flex flex-row px-1 py-2 w-fit text-sm">
            <li className="flex items-stretch">
              <Link
                className="flex items-center px-3 py-1.5 rounded transition-transform duration-200 hover:scale-110 focus:outline-none"
                href={"/references"}
              >
                Referanser
              </Link>
            </li>
            <li className="flex items-stretch">
              <Link
                className="flex items-center px-3 py-1.5 rounded transition-transform duration-200 hover:scale-110 focus:outline-none"
                href={"/counseling"}
              >
                Rådgivning
              </Link>
            </li>
            <li ref={submenuRef} className="relative flex items-stretch">
              <button
                className="flex items-center px-3 py-1.5 rounded transition-transform duration-200 hover:scale-110 focus:outline-none cursor-pointer"
                onClick={toggleSub}
              >
                Tjenester
                <svg
                  className={`w-4 h-4 ml-1 transition-transform ${
                    isSubOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isSubOpen && (
                <ul className="absolute top-full left-0 mt-4 p-2 bg-white shadow-lg rounded-lg min-w-[150px] z-50">
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 rounded transition-transform duration-200 hover:scale-105 focus:outline-none"
                      href={"/services/sale"}
                      onClick={closeSub}
                    >
                      Salg
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 rounded transition-transform duration-200 hover:scale-105 focus:outline-none"
                      href={"/services/marketing"}
                      onClick={closeSub}
                    >
                      Markedsføring
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block px-4 py-2 hover:bg-gray-100 rounded transition-transform duration-200 hover:scale-105 focus:outline-none"
                      href={"/services/service"}
                      onClick={closeSub}
                    >
                      Service
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="flex items-stretch">
              <Link
                className="flex items-center px-3 py-1.5 rounded transition-transform duration-200 hover:scale-110 focus:outline-none"
                href={"/about"}
              >
                Om
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Button
            type={"button"}
            title={"Ta kontakt"}
            icon="/arrow.svg"
            variant={"bg-customaccent hover:bg-customaccent-hover"}
            opensEmailForm
            onClick={toggleOpen}
          />
        </div>
      </div>

      {/* Full-width mobile menu overlay */}
      {isMenuOpen && (
        <div className="lg:hidden relative top-15 left-0 right-0 z-40 bg-base-100 shadow-lg rounded-2xl">
          {/* Menu items */}
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href={"/references"}
                  className="block py-3 px-4 text-lg hover:bg-transparent transition-transform duration-200 hover:scale-103 rounded-lg"
                  onClick={closeMenu}
                >
                  Referanser
                </Link>
              </li>
              <li>
                <Link
                  href={"/counseling"}
                  className="block py-3 px-4 text-lg hover:bg-transparent transition-transform duration-200 hover:scale-103 rounded-lg"
                  onClick={closeMenu}
                >
                  Rådgivning
                </Link>
              </li>

              {/* Services with submenu */}
              <li>
                <div className="py-3 px-4 text-lg font-medium">Tjenester</div>
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      href={"/services/sale"}
                      className="block py-2 px-4 rounded-lg hover:bg-transparent transition-transform duration-200 hover:scale-103"
                      onClick={closeMenu}
                    >
                      Salg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/marketing"}
                      className="block py-2 px-4 rounded-lg hover:bg-transparent transition-transform duration-200 hover:scale-103"
                      onClick={closeMenu}
                    >
                      Markedsføring
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/service"}
                      className="block py-2 px-4 rounded-lg hover:bg-transparent transition-transform duration-200 hover:scale-103"
                      onClick={closeMenu}
                    >
                      Service
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href={"/about"}
                  className="block py-3 px-4 text-lg rounded-lg hover:bg-transparent transition-transform duration-200 hover:scale-103"
                  onClick={closeMenu}
                >
                  Om
                </Link>
              </li>
            </ul>

            {/* Mobile contact button */}
            <div className="mt-8">
              <Button
                type={"button"}
                title={"Ta kontakt"}
                variant={"bg-customaccent hover:bg-customaccent-hover w-full"}
                opensEmailForm
                icon="/arrow.svg"
                onClick={() => {
                  toggleOpen();
                  closeMenu();
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-30 backdrop-blur-sm bg-base-300/50"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
