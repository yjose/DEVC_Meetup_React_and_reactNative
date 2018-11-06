import React, { useEffect, useState } from "react";

class AppBefore extends React.PureComponent {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  componentDidMount = this.updateTitle;

  componentDidUpdate = this.updateTitle;

  updateTitle() {
    const { count } = this.state;
    document.title = count ? `You clicked ${count} times` : "Hello DevC";
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={this.increment}>Click me</button>
      </div>
    );
  }
}

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count ? `You clicked ${count} times` : "Hello DevC";
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
// export default AppBefore;
