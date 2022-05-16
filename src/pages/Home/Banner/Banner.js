import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryBtn from "../../Sheard/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img className="max-w-sm rounded-lg shadow-2xl" src={chair} />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Hear </h1>
          <p className="py-6 mr-8">
            Provident cupiditate voluptatem et in. Quaerat fugiat utassumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get Started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;
