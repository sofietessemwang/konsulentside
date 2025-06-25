"use client";
import React, { FormEvent } from "react";
import Link from "next/link";
import SubmissionTable from "./SubmissionTable";

const page = () => {
  return (
    <div>
      <SubmissionTable />
      <Link href="../">Gå tilbake</Link>
    </div>
  );
};

export default page;
