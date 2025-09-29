import ContentComingSoon from "@/components/ContentComingSoon";
import Footer from "@/components/Footer";
import FooterContactForm from "@/components/FooterContactForm";
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
          {/* to do: gjør det mulig å skrive inn kontaktskjemaet */}
          <ContentComingSoon/>
        </main>
        
      </EmailFormProvider>
    </div>
  );
};

export default ReferencesPage;
