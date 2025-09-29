"use client";
import Footer from "@/components/Footer";
import FooterContactForm from "@/components/FooterContactForm";
import ContactForm from "@/components/form";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { EmailFormProvider } from "@/context/EmailFormContext";
import useContactForm from "@/hooks/useContactForm";
import React, { FormEvent, useState } from "react";

const ReferencesPage = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    success,
    setSuccess,
    isSubmitting,
    setIsSubmitting,
    onSubmit,
    resetForm,
    error,
    setError,
  } = useContactForm();

  const handleEmailSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: "", // Direct value, not from state
          email, // Current email from state
          message: "Email subscription from coming soon page", // Direct value
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setEmail("");
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (err: any) {
      console.error("error", err);
      setError("Network error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <EmailFormProvider>
        <div>
          <div className=" m-10 max-w-3xl">
            <p>Vi er nesten klare</p>
            <h1 className="">Mer innhold kommer</h1>
            <p>
              Kontakt meg hvis du ønsker å høre mer om hva jeg har å tilby og
              min faglige bakgrunn, eller legg igjen emailen din for å få
              oppdatering på når nye tjenester kommer ut
            </p>

            {success && (
              <div>
                Takk! Vi sender deg oppdateringer når nytt innhold er klart.
              </div>
            )}

            <form action="" onSubmit={handleEmailSubmit}>
              <input
                className="input input-secondary flex-1 border-[#FF6F61]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="btn bg-[#FF6F61] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sender..." : "Abonner"}
              </button>
            </form>
          </div>
        </div>
      </EmailFormProvider>
    </div>
  );
};

export default ReferencesPage;
