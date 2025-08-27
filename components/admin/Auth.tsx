"use client";
import { createClient } from "@/lib/supabase/client";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const supabase = await createClient();

    const { error: signingInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (signingInError) {
      console.error("Problems with signing in: ", signingInError?.message);
      return;
    }
  };

  return (
    <>
      <div className="border mt-20 flex flex-col items-center">
        <form action="" onSubmit={handleSubmit} className="flex flex-col bg-amber-400">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <button type="submit" className="border">
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
