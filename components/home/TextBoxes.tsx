"use client";
import React from "react";
import Button from "../Button";
import { useEmailForm } from "@/context/EmailFormContext";
import { slideFromBottom, useScrollAnimation } from "@/hooks/useAnimations";

const TextBoxes = () => {
  const { isOpen, toggleOpen } = useEmailForm();
  const isVisible = useScrollAnimation(0.1);

  return (
    <>
      <div className="relative -mt-5 px-4 md:px-8 lg:px-16 ">
        <div
          id="scroll-animate"
          className={`flex flex-col  md:flex-row gap-6 justify-center items-center md:items-stretch max-w-6xl mx-auto
        ${slideFromBottom(isVisible)}
                  `}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 1 */}
            <h2 className="text-2xl font-bold">Kom i gang</h2>
            <p className="py-3 leading-relaxed">
              her står det masse tekst bla bla bla bla Disse tre boksene tenkte
              jeg skulle fange brukere i forskjellige prosjektnivåer, altså
              start medium og finish. call to action, få kunder i alle stadier
              av utviklingsspekteret. knappene skal også fange det, tenker at
              ikke alle skal hete kontakt meg men at de skal hete forskjellig
            </p>
            <Button
              type={"button"}
              title={"Oppstarthjelp"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              size={"sm"}
              opensEmailForm
              onClick={toggleOpen}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 2 */}
            <h2 className="text-2xl font-bold">halla</h2>
            <p className="py-3 leading-relaxed">
              her står det masse tekst bla bla bla bla Her kan man ha en bra
              pitch, motiverende ord ett eller annet, kan også ha kontakt meg
              knappen her i stedet for les mer. men noe breath taking som får
              brukeren til å ville lese mer nedover. også kult å legge på en
              bevegelse her, kanskje at den kommer opp unnenifra
            </p>

            <Button
              type={"button"}
              title={"Veien videre"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              size={"sm"}
              opensEmailForm
              onClick={toggleOpen}
            />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 3 */}
            <h2 className="text-2xl font-bold">halla</h2>
            <p className="py-3 leading-relaxed">
              her står det masse tekst bla bla bla bla Her kan man ha en bra
              pitch, motiverende ord ett eller annet, kan også ha kontakt meg
              knappen her i stedet for les mer. men noe breath taking som får
              brukeren til å ville lese mer nedover. også kult å legge på en
              bevegelse her, kanskje at den kommer opp unnenifra
            </p>
            <Button
              type={"button"}
              title={"Ekspertveiledning"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              opensEmailForm
              onClick={toggleOpen}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBoxes;
