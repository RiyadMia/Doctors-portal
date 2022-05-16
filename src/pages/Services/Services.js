import React from "react";
import floride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import widthing from "../../assets/images/whitening.png";
import Service from "./Service/Service";

const Services = () => {
  const Services = [
    {
      _id: 1,
      name: "Floride Treatment",
      description: "",
      img: floride,
    },
    {
      _id: 2,
      name: " Cavity filling",
      description: "",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Witening ",
      description: "",
      img: widthing,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-xl text-center ">
        <h1 className="font-bold text-center uppercase text-primary ">
          Our Services
        </h1>
        <h2 className="text-4xl">Services we provide</h2>
      </div>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
