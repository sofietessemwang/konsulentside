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
      <div className="relative -mt-5 px-4 md:px-8 lg:px-16  ">
        <div
          id="scroll-animate"
          className={`flex flex-col  md:flex-row gap-10 justify-center items-center md:items-stretch max-w-6xl mx-auto
        ${slideFromBottom(isVisible)}
                  `}
        >
          <div className="bg-white rounded-lg  p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 1 */}
            <h2 className="text-2xl font-bold">
              Kundeinnsikt og personalisering
            </h2>
            <p className="py-3 leading-relaxed italic text-gray-600 text-center  ">
              
              "Forstå kundene dine dypere med CRM-system"
            </p>
            <p>
              Få innsikt i kundeadferd og preferanser for å tilby skreddersydde
              opplevelser som bygger lojalitet.
            </p>
            <Button
              type={"button"}
              title={"Kom i gang"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              size={"md"}
              opensEmailForm
              onClick={toggleOpen}
              icon="/arrow.svg"
            />
          </div>
          <div className="bg-white rounded-lg  p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 2 */}
            <h2 className="text-2xl font-bold">
              Automatisering og effektivitet
            </h2>
            <p className="py-3 leading-relaxed italic text-gray-600 text-center ">
              "Jobb enklere, selg mer med med CRM-systemet"
            </p>
            <p>
              Automatiser rutineoppgaver og forbedre arbeidsflyten slik at
              teamet kan fokusere på det som virkelig betyr noe.
            </p>

            <Button
              type={"button"}
              title={"Kom i gang"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              size={"md"}
              opensEmailForm
              onClick={toggleOpen}
              icon="/arrow.svg"
            />
          </div>
          <div className="bg-white rounded-lg  p-6 flex flex-col flex-1 max-w-sm">
            {/* Content for box 3 */}
            <h2 className="text-2xl font-bold">
              Integrasjon og datadrevet beslutning
            </h2>
            <p className="py-3 leading-relaxed italic text-gray-600 text-center ">
              "Alt i ett, klare kundedata med CRM-systemet"
            </p>
            <p>
              Samle alle kundedata på ett sted og ta smartere beslutninger med
              sanntidsanalyser og rapporter.
            </p>
            <Button
              type={"button"}
              title={"Kom i gang"}
              variant={"bg-customaccent hover:bg-customaccent-hover mt-auto"}
              size={"md"}
              icon="/arrow.svg"
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
