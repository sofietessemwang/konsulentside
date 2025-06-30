// components/PageHeader.tsx
'use client'
import React from "react";



interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="min-h-90 bg-gradient-to-br from-[#ffffff] to-[#f7f2f0] content-center text-center relative overflow-hidden"
  style={{
    clipPath: "ellipse(100% 70% at 50% 0%)"
  }}
>

    <h1>Om meg</h1>
    <p>Hjem > Om </p>



    </div>
  );
};

export default PageHeader;
