import React from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { getUsers } from "../api/user";
import { createPost } from "../api/posts";

const NewPost = () => {
  const users = useLoaderData();

  console.log(users);

  return (
    <>
      <Form method="post" className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
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

async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const userId = formData.get("userId");

  // const errors = postFormValidator({ title, userId, body });

  // if (Object.keys(errors).length > 0) {
  //   return errors;
  // }

  const post = await createPost(
    { title, body, userId },
    { signal: request.signal }
  );

  return redirect(`/posts/${post.id}`);
}

const loader = ({ request: { signal } }) => {
  return getUsers({ signal });
};

export const newPostRoute = {
  loader,
  action,
  element: <NewPost />,
};
