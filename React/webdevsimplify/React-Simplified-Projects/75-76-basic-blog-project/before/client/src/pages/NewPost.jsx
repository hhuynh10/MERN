import React from "react";
import { Form, useLoaderData } from "react-router-dom";
import axios from "axios";

const NewPost = () => {
  const users = useLoaderData();

  console.log(users);

  return (
    <>
      <Form method="post" className="form">
        <div className="form-row">
          <div className="form-group error">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <div className="error-message">Required</div>
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              {
                users.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>
                ))
              }
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="body">Body</label>
            <textarea name="body" id="body"></textarea>
          </div>
        </div>
        <div className="form-row form-btn-row">
          <a className="btn btn-outline" href="/posts">
            Cancel
          </a>
          <button className="btn">Save</button>
        </div>
      </Form>
    </>
  );
};

const loader = ({ request: { signal } }) => {
  return axios
    .get("http://127.0.0.1:3000/users", { signal })
    .then((res) => res.data);
};

export const newPostRoute = {
  loader,
  element: <NewPost />,
};
