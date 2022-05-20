import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BoolingModral from "./BoolingModral";
import Services from "./Services";
import { useQuery } from "react-query";
import Lodding from "../Sheard/Lodding";
const AbivleAppoinment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      ` https://sleepy-refuge-88548.herokuapp.com/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div className="my-12">
      <h4 className="my-20 text-3xl text-center text-primary">
        Available Appionment on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 gap-5 mt-3 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Services
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Services>
        ))}
      </div>
      {treatment && (
        <BoolingModral
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch={refetch}
        ></BoolingModral>
      )}
    </div>
  );
};

export default AbivleAppoinment;
