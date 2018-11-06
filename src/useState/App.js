import React, { useState } from "react";

class AppBefore extends React.PureComponent {
  state = {
    count: 0
  };
  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };
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

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default App;
// export default AppBefore;
