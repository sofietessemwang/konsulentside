"use client";
import React from "react";
import Button from "../Button";

const CoreValues = () => {
  function toggleOpen(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="bg-[#f7f2f0] flex flex-col px-40 py-20">
        <div className="flex flex-row">
          {/* first section with header and innledning and contact button */}
          <div className=" max-w-3xl">
            <h3 className="font-bold">
              Vi er klare for å hjelpe deg ta det neste steget for å ta
              bedriften din til neste nivå
            </h3>
            <p>CRM sine kjerneverdier må man alltid ha i bakhodet i design</p>
          </div>
          <div className=" flex flex-1 items-center justify-end  pr-3">
            <Button
              type={"button"}
              title={"Kom i gang"}
              icon="/arrow.svg"
              variant={"bg-customaccent hover:bg-customaccent-hover"}
              opensEmailForm
              onClick={toggleOpen}
            />
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* section with four core values */}
          <div className="p-6 bg-white rounded-lg">
            {/* want to add numbers as icons but for now i havent */}
            <h3>Markedsføring</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg">
            {/* want to add numbers as icons but for now i havent */}
            <h3>Salg</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg">
            {/* want to add numbers as icons but for now i havent */}
            <h3>Tilbakemeldinger</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg">
            {/* want to add numbers as icons but for now i havent */}
            <h3>Kundeservice</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValues;
