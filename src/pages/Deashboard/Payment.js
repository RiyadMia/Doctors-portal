import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Lodding from "../Sheard/Lodding";
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const { data: appoinment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Beare ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="font-bold text-success">
            Hello {appoinment.pastientName}
          </p>
          <h2 class="card-title">Pay for {appoinment.treatment}</h2>
          <p>
            Your Appoinment
            <samp className="text-orange-600">{appoinment.date}</samp> at
            {appoinment.slot}
          </p>
          <p>pleace pay : {appoinment.price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      <div
        class="card flex-shrink-0 w-50 max-w-md shadow-2xl 
bg-base-100"
      >
        <div class="card-body"></div>
      </div>
    </div>
  );
};

export default Payment;
