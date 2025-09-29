"use client";
import React, { FormEvent, useState } from "react";

const useContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    console.log("inside useContactForm");
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

      const result = await res.json();

      if (res.ok && result.success) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true); // Show notification
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(result.error || "Something went wrong");
      }
    } catch (err: any) {
      console.log("halla");
      console.error("error", err);
      setError("Network error occured");
    } finally {
      console.log("finally")
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(false);
    setError(null);
  };

  return {
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
    error,
    setError,
    onSubmit,
    resetForm,
  };
};

export default useContactForm;
