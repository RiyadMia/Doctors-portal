import React, { useState } from "react";
import { useQuery } from "react-query";
import Lodding from "../Sheard/Lodding";
import DoctorRow from "./DoctorRow";

const ManageDoctor = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery("doctors", () =>
    fetch("https://sleepy-refuge-88548.herokuapp.com/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Lodding></Lodding>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <DoctorRow
              key={doctor._key}
              doctor={doctor}
              index={index}
              refetch={refetch}
              setDeletingDoctor={setDeletingDoctor}
            ></DoctorRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageDoctor;
