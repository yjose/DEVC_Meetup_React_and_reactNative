import React from "react";

export default ({ title, body }) => (
  <div className="post">
    <h3 className="header"> {title} </h3>
    <div className="content">{body + body + body}</div>
  </div>
);
