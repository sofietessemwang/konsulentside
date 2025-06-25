"use client";
import React, { FormEvent, useState } from "react";
import { useEmailForm } from "@/context/EmailFormContext";

const ContactForm = () => {
  const { isOpen, toggleOpen } = useEmailForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true); // Show notification
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err: any) {
      console.error("error", err);
    }
  };

  return (
    <div className=" fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm bg-base-300/50 ">
      <div className=" flex flex-col items-center w-full max-w-md p-8 bg-white rounded shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-2xl cursor-pointer"
          onClick={toggleOpen}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="relative text-4xl font-extrabold dark:text-white text-[#FF6F61]">
          Contact us!
        </h1>
        <p className="text-center ">
          Lets get this conversation started! Tell us about yourself and we will
          contact you
        </p>
        {success && (
          <div className="mb-4 px-4 py-2 bg-[#A7C6ED] rounded">
            Submission succeeded!
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
            placeholder="Name"
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
            placeholder="Message"
          ></textarea>
          <button
            className="btn btn-soft btn-secondary w-full bg-[#FF6F61] text-[#333333]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
