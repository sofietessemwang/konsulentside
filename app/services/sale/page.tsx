import ContentComingSoon from "@/components/ContentComingSoon";
import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MainComponent from "@/components/Services/MainComponent";
import { EmailFormProvider } from "@/context/EmailFormContext";

import React from "react";

const SalesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1">
          <Header title={"Salg"} subtitle="Hjem > Tjenester > Salg" />
          <ContentComingSoon/>
        </main>
        <Footer />
      </EmailFormProvider>
    </div>
  );
};

export default SalesPage;
