import React from "react";
import ServiceCard from "./ServiceCard";

interface TitleProps {
  title: string;
  subtitle: string;
}

const MainComponent = ({ title, subtitle }: TitleProps) => {
  return (
    <>
      <div className=" flex flex-col lg:flex-row min-h-150 gap-3  my-10 ">
        {/* fjerne border??? */}
        <div className=" basis-1/3  flex   flex-col px-8 border-r-1 border-r-gray-200 ">
        <div className=" top-30 mt-10 sticky "><h3 className="font-semibold">{title}</h3>
          <p>{subtitle}</p></div>
          
        </div>
        <div className={` basis-2/3 flex justify-center flex-wrap "  `}>
          <ServiceCard
            image={"/ai3.svg"}
            width={"w-100"}
            height={"h-120"}
            title={"Moderne salgstrening B-2-B"}
            introduction={
              "Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn repterer for mer tekst: Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn"
            }
          />
          <ServiceCard
            image={"/ai2.svg"}
            width={"w-100"}
            height={"h-120"}
            title={"Bruk av KI i salg"}
            introduction={
              "Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn repterer for mer tekst: Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn"
            }
          />
          <ServiceCard
            image={"/saleSVG.svg"}
            width={"w-100"}
            height={"h-120"}
            title={"Bruk av KI i salg"}
            introduction={
              "Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn repterer for mer tekst: Forklaring på hva dette er for en tjeneste bla bla bla innledning nok til at man vil trykke seg inn"
            }
          />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
