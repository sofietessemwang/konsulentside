"use client";
import React, { useEffect, useState } from "react";

type Submission = {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
};

const SubmissionTable = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/contact");
        if (!res.ok) {
          throw new Error("Failed to fetch submissions");
        }

        const data = await res.json();
        setSubmissions(data.submissions || []);
      } catch (err) {
        setError("Error loading submissions");
        console.error("Error fetching submissions:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading submission...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h2 className="text-center text-4xl font-extrabold dark:text-white text-[#FF6F61]">
        Submissions
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-base-200">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.message}</td>
                <td>{new Date(s.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubmissionTable;
