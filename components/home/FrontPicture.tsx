import React from "react";
import Button from "../Button";

const FrontPicture = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url('office.png')",
        }}
      >
        <div className="hero-overlay"></div>
        {/* vet ikke helt om jeg liker fargen på denne altså */}
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
          <div className="text-customprimary bg-white/90 rounded-sm p-8 max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Skape muligheter</h1>
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
