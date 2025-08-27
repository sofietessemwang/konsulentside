"use client";
import {
  useStaggeredAnimation,
  staggeredSlideUp,
  useScrollTriggeredAnimation,
} from "@/hooks/useAnimations";
import React, { useEffect, useRef, useState } from "react";

const Services = () => {
  const [refs, visibleItems] = useScrollTriggeredAnimation(3);

  return (
    <div className="py-40 px-10 my-15 ">
      <h1 className="p-10 text-center">Tjenester</h1>
      <div className="grid grid-cols-1 gap-40  mx-auto">
        <div
          ref={(el) => {
            refs.current[0] = el;
          }}
          className={`  w-full lg:max-w-2xl lg:mr-auto  h-100 ${staggeredSlideUp(
            visibleItems[0]
          )}`}
        >
          <h3>Salg</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer t å legge på en bevegelse her, kanskje
            at den kommer opp unnenifra Her kan man ha en bra pitch, motiverende
            ord ett eller annet, kan også ha kontakt meg
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
        <div
          ref={(el) => {
            refs.current[1] = el;
          }}
          className={`  w-full lg:max-w-2xl lg:ml-auto h-100${staggeredSlideUp(
            visibleItems[1]
          )}`}
        >
          <h3>Markedsføring</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha en
            bra pitch, motiverende
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
        <div
          ref={(el) => {
            refs.current[2] = el;
          }}
          className={` w-full lg:max-w-2xl lg:mr-auto h-100 ${staggeredSlideUp(
            visibleItems[2]
          )}`}
        >
          <h3>AI</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
            knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifra Her kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
      </div>
    </div>
  );
  /*
   return (
    <div className="py-30 px-4 my-15 ">
      <h1 className="p-10 text-center">Tjenester</h1>
      <div className=" mx-auto">
        <div
          ref={(el) => {
            refs.current[0] = el;
          }}
          className={`service-card my-10 ${staggeredSlideUp(visibleItems[0])}`}
        >
          <h3>Salg</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
            knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifra Her kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
        <div
          ref={(el) => {
            refs.current[1] = el;
          }}
          className={` service-card my-10${staggeredSlideUp(visibleItems[1])}`}
        >
          <h3>Markedsføring</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha en
            bra pitch, motiverende
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
        <div
          ref={(el) => {
            refs.current[2] = el;
          }}
          className={`service-card my-10${staggeredSlideUp(visibleItems[2])}`}
        >
          <h3>AI</h3>
          <p>
            Dette er et avsnitt om salg som er service som tilbys... Her kan man
            ha en bra pitch, motiverende ord ett eller annet, kan også ha
            kontakt meg knappen her i stedet for les mer. men noe breath taking
            som får brukeren til å ville lese mer nedover. også kult å legge på
            en bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha
            en bra pitch, motiverende ord ett eller annet, kan også ha kontakt
            meg knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifraHer kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
            knappen her i stedet for les mer. men noe breath taking som får
            brukeren til å ville lese mer nedover. også kult å legge på en
            bevegelse her, kanskje at den kommer opp unnenifra Her kan man ha en
            bra pitch, motiverende ord ett eller annet, kan også ha kontakt meg
          </p>
          <a href="" className="link absolute bottom-2">
            Les mer...{" "}
          </a>
        </div>
      </div>
    </div>
  ); */
};

export default Services;
