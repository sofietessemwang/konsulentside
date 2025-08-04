import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="carousel carousel-center rounded-box max-w-screen space-x-4 p-4 pb-20 mx-8 mb-20 mt-20 pt-20">
        <div className="carousel-item">
          <img src="/bilde1.jpg" className="h-100 w-70" />
        </div>
        <div className="carousel-item">
          <img src="/bilde2.jpg" className=" h-100 w-70" />
        </div>
        <div className="carousel-item ">
          <img src="/bilde3.jpg" className=" h-100 w-70" />
        </div>
        <div className="carousel-item">
          <img src="/bilde4.jpg" className=" h-100 w-70" />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>
    </>
  );
};

export default Carousel;
