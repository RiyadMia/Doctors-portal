import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appoinment from "../../../assets/images/appointment.png";
import PrimaryBtn from "../../Sheard/PrimaryBtn";

const MakeApionment = () => {
  return (
    <section
      style={{
        background: `url(${appoinment})`,
      }}
      className="flex items-center justify-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-lg text-primary">Appointment</h3>
        <h2 className="text-3xl text-white ">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
          sequi illum corporis magni saepe aspernatur labore quam suscipit quasi
          amet architecto tempora dolorem rem assumenda voluptatum dolorum vero
          nobis cumque! Molestias cum, placeat ratione ad delectus libero
          perferendis blanditiis laboriosam?
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeApionment;
