import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import MainComponent from "@/components/Services/MainComponent";
import { EmailFormProvider } from "@/context/EmailFormContext";
import { salesTrainingData } from "@/pages/services/Sales";
import { Service } from "@/pages/services/Service";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1">
          <Header title={"Service"} subtitle="Hjem > Tjenester > Service" />
          <MainComponent data={Service} />
        </main>
        <Footer />
      </EmailFormProvider>
    </div>
  );
};

export default page;
