"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import aboutPage from "@/app/about/page";
//todos: legg til click to open for mobil størrelse slik at det ikke bare er hover??
//ønsker å fjerne pilen ned den var stygg

const Navbar = () => {
  const handleContactButton = () => {
    console.log("trykket");
  };

  return (
    <div className="navbar shadow-sm text-customprimary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={""}>Testemonials</Link>
            </li>
            <li>
              <Link href={""}>Services</Link>
              <ul className="p-2">
                <li>
                  <Link href={""}>Sale</Link>
                </li>
                <li>
                  <Link href={""}>Marketing</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={""}>About</Link>
            </li>
          </ul>
        </div>
        <a className=" text-xl">Ronny Wang</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={""}>Testemonials</Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <Link href={""}>Sale</Link>
                </li>
                <li>
                  <Link href={""}>Marketing</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button
          type={"button"}
          title={"Kontakt meg"}
          variant={"bg-customaccent hover:bg-customaccent-hover"}
          onClick={handleContactButton}
        />
      </div>
    </div>
  );
};

export default Navbar;
