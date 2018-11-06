import React, { lazy, Suspense, Component } from "react";
import { Spinner } from "../components";

const SimpleComp = lazy(() => import("../components/SimpleComp"));

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Lazy example</h1>
        <Suspense fallback={<Spinner />}>
          <SimpleComp title="I am a component with lazy import " />
        </Suspense>
      </div>
    );
  }
}

export default App;
