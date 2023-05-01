import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import axios from "axios";
import { getPost } from "../api/posts";
import { getUser } from "../api/user";
import { getComments } from "../api/comments";

const Post = () => {
  const { post, comments, user } = useLoaderData();

  console.log(comments);

  return (
    <>
      <h1 className="page-title">{post.title}</h1>
      <span className="page-subtitle">
        By: <Link to={`/users/${post.userId}`}>{user.name}</Link>
      </span>
      <div>{post.body}</div>
      <h3 className="mt-4 mb-2">Comments</h3>
      <div className="card-stack">
        <div className="card">
          {comments.map((comment) => {
            return (
              <div className="card-body" key={comment.id}>
                <div className="text-sm mb-1">{comment.email}</div>
                {comment.body}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

async function loader({ request: { signal }, params: { postId } }) {
  const post = await getPost(postId, { signal });

  const comments = getComments(postId, { signal });

  const user = getUser(post.userId, { signal });

  return { post, comments: await comments, user: await user };
}

export const postRoute = {
  loader,
  element: <Post />,
};
