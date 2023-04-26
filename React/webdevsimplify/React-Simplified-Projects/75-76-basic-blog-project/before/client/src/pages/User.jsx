import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const User = () => {
  const user = useLoaderData();
  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite},{" "}
        {user.address.city}, {user.address.zipcode}
      </div>
    </>
  );
};

const loader = ({ request: { signal }, params }) => {
  return axios
    .get(`http://127.0.0.1:3000/users/${params.userId}`, { signal })
    .then((res) => res.data);
};

export const userRoute = {
  loader,
  element: <User />,
};
