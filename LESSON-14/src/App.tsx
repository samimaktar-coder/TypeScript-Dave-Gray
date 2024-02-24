import { Fragment } from "react";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <Counter>{(num: number) => <Fragment>Current Count: {num}</Fragment>}</Counter>
    </>
  );
}

export default App;
