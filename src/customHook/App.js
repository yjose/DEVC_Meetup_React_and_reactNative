import React, { useState, useEffect } from "react";
import { Post } from "../components";

function useFetchPost(postID) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then(response => response.json())
      .then(post => setPost(post));
  });

  return post;
}

const App = () => {
  const post = useFetchPost(1);

  if (post) {
    return (
      <div>
        <Post {...post} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default App;
