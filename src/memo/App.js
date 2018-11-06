import React, { Component } from "react";
import { SimpleComp } from "../components";

const SimpleCompMemo = React.memo(() => (
  <SimpleComp title="I am a component with memo " />
));
class App extends Component {
  state = {
    count: 0
  };
  up = () => this.setState({ count: this.state.count + 1 });
  down = () => this.setState({ count: this.state.count - 1 });
  render() {
    const { count } = this.state;
    return (
      <div className="App">
        <h1> Memo example</h1>
        <h1>{count}</h1>
        <button onClick={this.up}> + </button>
        <button onClick={this.down}> - </button>
        <SimpleComp title="I am a simple component " />
        <SimpleCompMemo />
      </div>
    );
  }
}

export default App;
