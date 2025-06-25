'use client'
import React, { FormEvent, useState } from "react";

const useContactForm = () => {
    const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [success, setSuccess] = useState(false);
      const [isSubmitting, setIsSubmitting] = useState(false);

      const onSubmit = async (e: FormEvent) => {
          e.preventDefault();
          setIsSubmitting(true);
      
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
    
        const resetForm = () => {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(false);
  };
        
  return {
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
  };
};

export default useContactForm;

