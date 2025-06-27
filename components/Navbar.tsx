"use client";
import React, { useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { useEmailForm } from "@/context/EmailFormContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, toggleOpen } = useEmailForm();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="navbar  z-50 fixed top-0">
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
          <a className="text-xl">Ronny Wang</a>
        </div>

        {/* Desktop menu */}
        <div className="navbar-center hidden lg:flex  rounded-full  bg-white">
          <ul className="menu menu-horizontal px-1">
            <li className="">
              <Link className=" hover:bg-transparent transition-transform duration-200 hover:scale-110" href={""}>
                Referanser
              </Link>
            </li>
            <li>
              <details>
                <summary className="  hover:bg-transparent transition-transform duration-200 hover:scale-110">Tjenester</summary>
                <ul className="p-2">
                  <li>
                    <Link className="  hover:bg-transparent transition-transform duration-200 hover:scale-110" href={""}>
                      Salg
                    </Link>
                  </li>
                  <li>
                    <Link className="  hover:bg-transparent transition-transform duration-200 hover:scale-110 " href={""}>
                      Markedsføring
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link className=" hover:bg-transparent transition-transform duration-200 hover:scale-110 " href={"/about"}>
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
        /* skal egentlig være absolute her tror jeg men da dukker den ikke opp. hvis problemer senere sjekk her */
        <div className="lg:hidden relative top-15 left-0 right-0 z-40 bg-base-100 shadow-lg rounded-2xl">
          {/* Menu items */}
          <div className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href={""}
                  className="block py-3 px-4 text-lg  hover:bg-transparent transition-transform duration-200 hover:scale-103 rounded-lg"
                  onClick={closeMenu}
                >
                  Referanser
                </Link>
              </li>

              {/* Services with submenu */}
              <li>
                <div className="py-3 px-4 text-lg font-medium">Tjenester</div>
                <ul className="ml-4 mt-2 space-y-2">
                  <li>
                    <Link
                      href={""}
                      className="block py-2 px-4  rounded-lg  hover:bg-transparent transition-transform duration-200 hover:scale-103"
                      onClick={closeMenu}
                    >
                      Salg
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={""}
                      className="block py-2 px-4  rounded-lg  hover:bg-transparent transition-transform duration-200 hover:scale-103"
                      onClick={closeMenu}
                    >
                      Markedsføring
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href={"/about"}
                  className="block py-3 px-4 text-lg rounded-lg  hover:bg-transparent transition-transform duration-200 hover:scale-103"
                  onClick={closeMenu}
                >
                  Om
                </Link>
              </li>
            </ul>

            {/* Mobile contact button, kanksje fjerne denne? mtp brukergrensesnitt */}
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
          /* denne er litt rar kanksje endre på dette senere det er backdrop */
          className="lg:hidden fixed inset-0 z-30 backdrop-blur-sm bg-base-300/50"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;
