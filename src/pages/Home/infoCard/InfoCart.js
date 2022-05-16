import React from "react";

const InfoCart = ({ img, CardTaitl, bgclassName }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${bgclassName}`}>
      <figure>
        <img className="pt-5 pl-5" src={img} alt="Album" />
      </figure>
      <div className="text-white card-body">
        <h2 className="card-title">{CardTaitl}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
      </div>
    </div>
  );
};

export default InfoCart;
