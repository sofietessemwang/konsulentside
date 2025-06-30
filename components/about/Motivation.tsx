import React from "react";

const Motivation = () => {
  return (
    <>
      <div className=" min-h-96 bg-[#f7f2f0] flex flex-col items-center justify-center my-10">
        <h2 className="">Motivasjon</h2>
        <div className="flex flex-col md:flex-row gap-8">
            {/* fjernet bakgrunnsfarge bg-[#dde5ed] */}
          <div className=" bg- p-8 min-w-[220px] max-w-xs flex-1 ">
            <h3 className="font-bold mb-2">Tilgjengelighet</h3>
            <p>
              Ved å dele egne erfaringer kan man gjøre kunnskap lettere
              tilgjengelig, jeg ønsker det og det og dette får jeg gjort gjennom
              et slikt prosjekt
            </p>
          </div>
          <div className="  p-8 min-w-[220px] max-w-xs flex-1 ">
            <h3 className="font-bold mb-2">Erfaringsutbytte</h3>
            <p>Dette vil kunne gi økt erfaring og kunnskap for begge parter bla bla fortelle litt mer om dette</p>
          </div>
          <div className="  p-8 min-w-[220px] max-w-xs flex-1 ">
            <h3 className="font-bold mb-2">Videreutvikling</h3>
            <p>Her kan det også stå litt mer om hvordan dette kan føre til videreutvikling osv</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Motivation;
