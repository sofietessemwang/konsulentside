import Footer from "@/components/Footer";
import ContactForm from "@/components/form";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import React from "react";

const ReferencesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <ContactForm />
        <Navbar />
        <main className="flex-1">
          <Header title={"Referanser"} subtitle="Hjem > Referanser" />
          <div className="text-7xl text-center py-20">Innhold kommer snart</div>
        </main>
        <Footer />
      </EmailFormProvider>
    </div>
  );
};

export default ReferencesPage;
