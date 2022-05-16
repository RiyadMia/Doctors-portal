import React from "react";

const Services = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="shadow-xl card lg:max-w-lg bg-base-100">
      <div className="text-center card-body">
        <h2 className="text-xl font-bold text-secondary"> {name}</h2>
        <p>
          {slots.length > 0 ? (
            <samp>{slots[0]}</samp>
          ) : (
            <samp className="text-red-500">
              No Slot Available.Try Another Day.
            </samp>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length > 1 ? "spaces" : "space"}Available
        </p>
        <div className="justify-center mt-3 card-actions">
          <label
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            htmlFor="booking-modal"
            className="font-bold text-white uppercase btn btn-secondary btn-sm bg-gradient-to-r from-secondary to-primary"
          >
            Book Apponment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Services;
