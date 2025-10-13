import ContentComingSoon from "@/components/ContentComingSoon";
import CoreValues from "@/components/counseling/CoreValues";
import EndPicture from "@/components/counseling/EndPicture";
import TopInfo from "@/components/counseling/TopInfo";
import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1">
          <Header title={"Rådgivning"} subtitle="Hjem > Rådgivning" />
          <ContentComingSoon/>
        </main>
        <Footer/>
      </EmailFormProvider>
    </div>
  );
};

export default page;
