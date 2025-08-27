"use client";
import Auth from "@/components/admin/Auth";
import SubscribersTable from "@/components/admin/Table-subscribers";
import { createClient } from "@/lib/supabase/client";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function Home() {
  /* tracking who is logged in, determines what content of the return that is visible */
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    /* initial session */
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    /* calling it */
    getInitialSession();

    /* listen for auth to change */
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("auth event: ", event, session);
      setSession(session);
      setLoading(false);
    });

    /* cleanup */

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {session ? (
        <>
          <h3 className="text-center text-4xl font-extrabold dark:text-white text-[#FF6F61]">
            Velkommen {session.user.email}
          </h3>
          <button onClick={logout}>Log out</button>
          <SubscribersTable />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}
