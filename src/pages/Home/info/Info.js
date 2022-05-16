import React from "react";
import InfoCart from "../infoCard/InfoCart";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
const Info = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 ">
      <InfoCart
        CardTaitl="Opening Hours"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCart>
      <InfoCart
        CardTaitl="Ours Locations"
        bgclassName="bg-accent"
        img={marker}
      ></InfoCart>
      <InfoCart
        CardTaitl="Contact us"
        bgclassName="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCart>
    </div>
  );
};

export default Info;
