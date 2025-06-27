'use client'
import useContactForm from "@/hooks/useContactForm";
import React from "react";

const FooterContactForm = () => {
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
  } = useContactForm();

  
  return <>
  
    <div className="w-full max-w-sm">
      <h6 className="footer-title mb-4">Get in Touch</h6>
      
      {success && (
        <div className="mb-4 px-3 py-2 bg-green-100 text-green-800 rounded text-sm">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-3">
        <input
          className="input input-sm w-full bg-base-200 border-0"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Your name"
          required
        />
        
        <input
          className="input input-sm w-full bg-base-200 border-0"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Your email"
          required
        />
        
        <textarea
          className="textarea textarea-sm w-full bg-base-200 border-0 resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows={3}
          required
        />
        
        <button
          className="btn btn-sm bg-customaccent w-full"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>

  
  
  
  </>;
};

export default FooterContactForm;
