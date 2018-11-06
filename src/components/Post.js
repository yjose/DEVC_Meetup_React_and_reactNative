import React from "react";

export default ({ title, body }) => (
  <div className="post">
    <h1> {title} </h1>
    <div>{body}</div>
  </div>
);
