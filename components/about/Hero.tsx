import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-stretch min-h-96 sm:flex-row  py-10 px-10 gap-6 ">
        <div className="basis-1/3  flex  justify-center items-center ">
          <img src="portrett1.jpg" alt="Ronny Wang" className="min-h-50" />
        </div>

        <div className="basis-2/3  flex flex-col justify-center ">
          <h2>Ronny Wang</h2>
          <p>
            Jeg har jobbet 30 år med salg og salgsledelse innenfor fagområdet
            CRM, der jeg har solgt og levert CRM-løsninger til mer enn 200
            selskaper. Jeg har som gründer bygget opp og solgt 2 lønnsomme CRM
            selskaper der jeg selv i dag leder den ene enheten som en del av
            Advania Norge. Jeg er lidenskapelig bruker av CRM-systemer og vet at
            riktig bruk, sammen med en god plan og velvillige brukere, gir
            bedriften bedre mulighet for å finne, vinne og beholde sine kunder.
            De siste 15 år har jeg også vært gjesteforelester på
            Hanldeslhøyskolen BI og Høyskolen Kristiania der jeg har undervist
            studenter i moderne salg og markedsføringsprinsipper. De siste årene
            har jeg tatt til meg AI for bruk innenfor salg og er brennende
            engasjert i hvordan AI-verktøy kan øke både personlig produktivitet,
            men også bli strategisk verktøy for virksomheter i ulike bransjer.
            Som rådgiver er jeg opptatt av å gi kundene mest mulig verdi av sin
            CRM-investering.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
