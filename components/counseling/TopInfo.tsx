import React from "react";

const TopInfo = () => {
  return (
    <>
      <div className=" min-h-90 flex flex-row mx-40 my-20 gap-6 ">
        <div className=" basis-1/3">
          {/* bilde */}

          <img
            src="/buisness.jpg"
            alt="buisness"
            className="w-full h-100 object-cover "
          />
        </div>

        <div className=" basis-2/3 flex flex-col p-4">
          {/* boks med info div */}
          <div>
            <h2>CRM Rådgivning</h2>
            <p>
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla <br />
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla
              Nøkkelverdier i rådgivning hadler om det og det og blabla
            </p>
          </div>
          <div className=" flex flex-row justify-center flex-1 gap-2 pt-4">
            {/* tre punkter fremheves */}
            <div className=" flex-1 ">
              <img src="/check.svg" alt="" className="h-10 " />
              <h3>Konsistens</h3>
              <p>Det er viktig med konsistens, det har alt å si for fremgang</p>
            </div>
            <div className=" flex-1">
              <img src="/check.svg" alt="" className="h-10 " />
              <h3>Oppfølging</h3>
              <p>
                Oppfølging må skje slik at det og det skjer og det er viktig
              </p>
            </div>
            <div className=" flex-1">
              <img src="/check.svg" alt="" className="h-10 " />
              <h3>Bygge relasjoner</h3>
              <p>For å sikre salg må du bygge relasjoner</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopInfo;
