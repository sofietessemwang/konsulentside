import React from "react";
import ServiceCard from "./ServiceCard";
import { ServicePageData } from "@/types/ServiceTypes";


interface MainComponentProps {
  data: ServicePageData;
}

const MainComponent = ({ data }: MainComponentProps) => {
  const { title, subtitle, services } = data;

  return (
    <>
      <div className="flex flex-col lg:flex-row min-h-150 gap-3 my-10">
        {/* Left sidebar with title and subtitle */}
        <div className="basis-1/3 flex flex-col px-8 border-r-1 border-r-gray-200">
          <div className="top-30 mt-10 sticky">
            <h3 className="font-semibold">{title}</h3>
            <p>{subtitle}</p>
          </div>
        </div>
        
        {/* Right side with service cards */}
        <div className="basis-2/3 flex justify-center flex-wrap">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.title}-${index}`}
              image={service.image}
              width={service.width}
              height={service.height}
              title={service.title}
              introduction={service.introduction}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MainComponent;