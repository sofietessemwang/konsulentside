"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { slideFromRight, useSlideIn } from "@/hooks/useAnimations";

const FrontPicture = () => {
  const { isVisible, isMounted } = useSlideIn(100);

  return (
    <>
      <div
        className="hero min-h-screen z-10"
        style={{
          backgroundImage: "url('whiteOffice.jpg')",
        }}
      >
        {/* legg til hero overlay her så får du mørk overlay hvis det ønskes */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white z-0"></div>
        {/* vet ikke helt om jeg liker fargen på denne altså */}
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
          <div
            className={`text-customprimary rounded-sm p-8 max-w-md ${slideFromRight(
              isVisible,
              isMounted
            )}`}
          >
            <h1>Skape muligheter</h1>
            <p className="mb-5">
              Her kan man ha en bra pitch, motiverende ord ett eller annet, kan
              også ha kontakt meg knappen her i stedet for les mer. men noe
              breath taking som får brukeren til å ville lese mer nedover. også
              kult å legge på en bevegelse her, kanskje at den kommer opp
              unnenifra
            </p>
            <a href="" className="link">
              Les mer...{" "}
            </a>
            {/* <Button
              type={"button"}
              title={"Kontakt meg"}
              variant={"bg-customaccent hover:bg-customaccent-hover"}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontPicture;
