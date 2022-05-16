import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
const BoolingModral = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const hendelBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      patient: user.email,
      pastientName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          console.log(data);
          toast(`Appoinment is set ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            ` Already have and Appoinment ${data.booking?.date} at ${data.booking?.slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-secondary">
            Booking for : {name}
          </h3>

          <form
            onSubmit={hendelBooking}
            className="grid grid-cols-1 gap-3 mt-5 justify-items-center"
          >
            <input
              type="text"
              value={format(date, "PP")}
              className="w-full max-w-xs input input-bordered"
            />

            <select
              name="slot"
              className="w-full max-w-xs select select-bordered"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="number"
              name="phone"
              placeholder=" Your Phone Number"
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="submit"
              value=" submit "
              className="w-full max-w-xs input input-bordered btn btn-secondary"
            />
          </form>

          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
};

export default BoolingModral;
