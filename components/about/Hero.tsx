import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-stretch min-h-96 sm:flex-row  py-10 px-10 gap-6 ">
        <div className="basis-1/3  flex  justify-center items-center ">
          <img src="CVbilde.jpeg" alt="Ronny Wang" className="min-h-70" />
        </div>

        <div className="basis-2/3  flex flex-col justify-center ">
          <h2>Ronny Wang</h2>
          <p>
            Med bakgrunn i det og det ser jeg muligheten for å videreformidle
            opplært kunnskap om det og det. Med hovedvekt på disse og de
            områdene så ser jeg muligheten for det og det Med bakgrunn i det og det ser jeg muligheten for å videreformidle
            opplært kunnskap om det og det. Med hovedvekt på disse og de
            områdene så ser jeg muligheten for det og det
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
