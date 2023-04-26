import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const post = useLoaderData();
  const comments = useLoaderData();

  console.log(comments);

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <div className="card">
          <div className="card-body">
            <div className="text-sm mb-1">{comments.email}</div>
            laudantium enim quasi est quidem magnam voluptate ipsam eos tempora
            quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente
            accusantium
          </div>
        </div>
      </div>
    </>
  );
};

const loader = ({ request: { signal }, params }) => {
  return axios
    .get(`http://127.0.0.1:3000/posts/${params.postId}`, { signal })
    .then((res) => res.data);
};

const loader1 = ({ request: { signal }, params }) => {
  return axios
    .get(`http://127.0.0.1:3000/posts/${params.postId}/comments`, { signal })
    .then((res) => res.data);
};

export const postRoute = {
  loader,
  loader1,
  element: <Post />,
};
