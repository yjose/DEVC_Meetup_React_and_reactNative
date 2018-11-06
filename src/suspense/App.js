import React, { lazy, Suspense, Component } from "react";
//import { createCache, createResource } from "react-cache";
import { Spinner, Post as PostContainer, SearchInput } from "../components";

const fetchPost = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => json);
};

let post = false;
let posts = [];

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts/")
    .then(response => response.json())
    .then(json => (data = json));
};

const Posts = () => {
  if (!data) {
    throw fetchPosts();
  }

  return (
    <div className="container">
      {data.map((post, i) => (
        <PostContainer {...post} key={i} />
      ))}
    </div>
  );
};
const Post = ({ id }) => {
  if (data) return <PostContainer {...post} />;
};

class App extends Component {
  state = {
    postId: null
  };
  setPostId = id => this.setState({ postId: id });

  onSubmit = v => {
    this.setPostId(v);
  };
  render() {
    const { postId } = this.state;
    return (
      <div className="App">
        <h1> Memo example</h1>
        <SearchInput onSubmit={this.onSubmit} />
        <Suspense fallback={<Spinner />} maxDuration={1000}>
          {postId && <Post id={postId} />}
        </Suspense>
      </div>
    );
  }
}

export default App;

//{postId && <Post id={postId} />} <Posts />

/*
const cache = createCache();
const PostResource = createResource(fetchPost);

*/
