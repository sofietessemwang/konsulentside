"use client";
import React from "react";
import Button from "../Button";

const EndPicture = () => {
  function toggleOpen(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className=" min-h-120 mx-40 my-20 gap-6 ">
        <div className=" w-full flex flex-row gap-6 relative">
          {/* main content */}
          <div className=" flex flex-col flex-1 p-4 justify-center ">
            {/* text */}
            <h2>Her kan noen andre ting også stå</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis{" "}
            </p>
            <Button
              type={"button"}
              title={"Få oppdatering"}
              icon="/arrow.svg"
              variant={"bg-customaccent hover:bg-customaccent-hover"}
              opensEmailForm
              onClick={toggleOpen}
            />
          </div>
          <div className=" flex-1">
            <img
              src="/buisness.jpg"
              alt="buisness"
              className="w-full h-100 object-cover "
            />
          </div>
          <div
            className="bg-[#f7f2f0] flex flex-row  max-w-lg gap-3 absolute left-1/2 -translate-x-1/2 -bottom-16  rounded-lg p-4"
            style={{ zIndex: 10 }}
          >
            {/* overlapping content */}

            <div>
              <h6 className="font-semibold">Poeng 1</h6>
              <p>En setning som forklarer hva dette vil si</p>
            </div>

            <div>
              <h6 className="font-semibold">Poeng 2</h6>
              <p>En setning som forklarer hva dette vil si</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EndPicture;
