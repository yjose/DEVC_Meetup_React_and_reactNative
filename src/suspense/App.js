import React, { lazy, Suspense, Component } from "react";
import { Spinner, Post as PostContainer, SearchInput } from "../components";

let data = false;
let posts = [];

const fetchData = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response => response.json())
    .then(json => (data = json));
};
const fetchPost = id => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(json => (posts[id] = json));
};

const Posts = () => {
  if (!data) {
    throw fetchData();
  }

  return (
    <ul>
      {data.map((post, i) => (
        <li key={i}> {post.title} </li>
      ))}
    </ul>
  );
};
const Post = ({ id }) => {
  console.log(id);
  const post = posts[id];
  if (!posts[id]) {
    throw fetchPost(id);
  }

  return <PostContainer {...post} />;
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
        <Suspense fallback={<Spinner />} maxDuration={4000}>
          {postId && <Post id={postId} />}
        </Suspense>
      </div>
    );
  }
}

export default App;
