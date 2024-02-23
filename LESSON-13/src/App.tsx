import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User>({} as User);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  useEffect(() => {
    console.log("Mounting");
    console.log("User: ", users);
    return () => console.log("Unmounting");
  }, [users]);

  type fibFun = (n: number) => number;

  const fib: fibFun = (n) => {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
  };

  const myNum: number = 23;

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 2);
    },
    []
  );

  const result = useMemo(() => {
    console.log("Inside useMemo");
    return fib(myNum);
  }, [myNum]);

  return (
    <>
      <div className='App'>
        <h1>{count}</h1>
        <button onClick={addTwo}>Add</button>
        <h2>Result: {result}</h2>
        <input type='text' ref={inputRef} />
      </div>
    </>
  );
}

export default App;
