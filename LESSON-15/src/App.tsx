import { Fragment } from "react";
import "./App.css";
import Counter from "./Counter";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";

function App() {
  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <Counter>
        {(num: number) => <Fragment>Current Count: {num}</Fragment>}
      </Counter>
    </CounterProvider>
  );
}

export default App;
