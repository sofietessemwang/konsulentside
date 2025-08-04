"use client";
import React, { useState } from "react";

interface CardProps {
  image?: string;
  width: string;
  height: string;
  title: string;
  introduction: string;
}

const ServiceCard = ({
  image,
  width,
  height,
  title,
  introduction,
}: CardProps) => {
  const [rotated, setRotated] = useState(false);

  const handleClick = () => {
    setRotated((prev) => !prev);
    
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg hover:scale-105 ${width} ${height} flex flex-col mx-2 my-5 `}
    >
      {/* Image Section */}
      {image && (
        <div className="h-48 flex items-center justify-center overflow-hidden mt-4">
          <img
            src={image}
            alt={title}
            className="w-full  object-contain h-25"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {introduction}
          </p>
        </div>

        {/* Read More Section - positioned at bottom */}
        <div className="flex justify-end items-center mt-auto">
          <div
            className="bg-customaccent w-15 h-15 rounded-full flex items-center justify-center cursor-pointer"
            onClick={handleClick}
          >
            <svg
              className={`w-6 h-6 transition-transform ${
                rotated ? "rotate-360" : "rotate-270"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
