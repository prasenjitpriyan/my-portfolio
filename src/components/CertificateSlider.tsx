import React from "react";

const CertificateSlider = () => {
  return (
    <div className="carousel rounded-box border-2 border-text-primary">
      <div className="carousel-item">
        <button className="w-[300px] h-[400px] bg-pink-300">Primary</button>
      </div>
      <div className="carousel-item">
        <button className="w-[300px] h-[400px] bg-yellow-300">Primary</button>
      </div>
      <div className="carousel-item">
        <button className="w-[300px] h-[400px] bg-blue-300">Primary</button>
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
          alt="Burger"
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
          alt="Burger"
        />
      </div>
    </div>
  );
};

export default CertificateSlider;
