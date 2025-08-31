import Education from "@/components/about/Education";
import Header from "@/components/Header";
import Hero from "@/components/about/Hero";
import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import React from "react";
import Motivation from "@/components/about/Motivation";
import Timeline from "@/components/about/TimelineVertical";
import TimelineHorizontal from "@/components/about/TimelineHorizontal";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1 ">
          {/* header */}
          {/* <div className="min-h-80 bg-[#a7c6ed] content-center">
            <h1 className="text-center">Om meg</h1>
          </div> */}
          <Header title={"Om meg"} subtitle="Hjem > Om" />
          <Hero />
          
          {/* <Motivation />

          <div className="py-10 ">
            <h2 className="text-center">
              Hva jeg har holdt på med i det siste
            </h2>
            <TimelineHorizontal
              events={[
                {
                  heading: "Prosjekt hos kunde",
                  subHeading: "2016",
                  direction: "top",
                },
                {
                  heading: "Ansettelse hos Advania",
                  subHeading: "2019",
                  direction: "bottom",
                },
                {
                  heading: "Leder i gruppen",
                  subHeading: "2021",
                  direction: "top",
                },
              ]}
            /> 
          </div>*/}
        </main>
        <Footer />
      </EmailFormProvider>
    </div>
  );
};

export default AboutPage;
