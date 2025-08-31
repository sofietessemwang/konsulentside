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
      <div>
        <div className="bg-amber-200 ml-10">
          <p>Vi er nesten klare</p>
          <h1>Mer innhold kommer</h1>
          <p>
            Kontakt meg hvis du ønsker å høre mer om hva jeg har å tilby og min
            faglige bakgrunn{" "}
          </p>
        </div>
        <div>
          <FooterContactForm />
        </div>
      </div>
    </div>
  );
};

export default ReferencesPage;
