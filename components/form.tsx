"use client";
import React, { FormEvent, useState } from "react";
import { useEmailForm } from "@/context/EmailFormContext";
import useContactForm from "@/hooks/useContactForm";

const ContactForm = () => {
  const { isOpen, toggleOpen } = useEmailForm();

 const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    success,
    isSubmitting,
    onSubmit,
    resetForm,
  } = useContactForm();

  if (!isOpen) return null;

  const handleClose = () => {
    resetForm();
    toggleOpen();
  };
  

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm bg-base-300/50 ">
      <div className=" flex flex-col items-center w-full max-w-md p-8 bg-white rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={handleClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="relative text-4xl font-extrabold dark:text-white text-[#FF6F61]">
          Kontakt meg!
        </h1>
        <p className="text-center ">
          La oss få samtalen i gang, fortell om deg selv så tar jeg kontakt
        </p>
        {success && (
          <div className="mb-4 px-4 py-2 bg-[#A7C6ED] rounded">
            Innsending velykket!
          </div>
        )}
        <form
          className="flex flex-col items-center gap-4 py-8 w-full max-w-md"
          action=""
          onSubmit={onSubmit}
        >
          <input
            className="input input-secondary w-full border-[#FF6F61]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Navn"
          />
          <input
            className="input input-secondary w-full border-[#FF6F61]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="textarea textarea-secondary w-full border-[#FF6F61]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            id=""
            placeholder="Melding"
          ></textarea>
          <button
            className="btn btn-soft btn-secondary w-full bg-[#FF6F61] text-[#333333]"
            type="submit"
            
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sender inn..." : "Send inn"}
          
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
