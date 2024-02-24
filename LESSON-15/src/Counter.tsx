import { ReactNode } from "react";
import { useCounter } from "./context/CounterContext";
import { userCounterText } from "./context/CounterContext";

type CounterType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: CounterType) => {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = userCounterText();

  return (
    <div>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>➕</button>
        <button onClick={decrement}>➖</button>
      </div>
      <input type='text' value={text} onChange={handleTextInput} />
      <h1>{text}</h1>
    </div>
  );
};

export default Counter;
