"use client";
import { createClient } from "@/lib/supabase/client";
import React, { useEffect, useState } from "react";

interface Subscribers {
  name: string;
  email: string;
  created_at: string;
}

export default function SubscribersTable() {
  const [subscribers, setSubscribers] = useState<Subscribers[]>([]);

  const fetchData = async () => {
    const supabase = await createClient();
    const { error, data } = await supabase
      .from("subscribers")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error reading task: ", error.message);
      return;
    }

    setSubscribers(data);
  };
  /* fetch tasks at initial page load*/
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>name</th>
              <th>email</th>
              <th>created at</th>
            </tr>
          </thead>
          {subscribers.map((person, key) => (
            <tbody key={key}>
              <tr>
                <td>{person.name} </td>
                <td>{person.email} </td>
                <td>{person.created_at} </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
