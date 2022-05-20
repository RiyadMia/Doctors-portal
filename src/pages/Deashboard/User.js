import React from "react";
import { useQuery } from "react-query";
import Lodding from "../Sheard/Lodding";
import UserRow from "./UserRow";

const User = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(` https://sleepy-refuge-88548.herokuapp.com/user`, {
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
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
