import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Heading title='Hello!' />
      <Section title='Nothing'>
        <em>Click Me</em>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List
        items={["🍵 Coffee", "☕ Chai", "👩‍💻 Code", 46]}
        render={(item) => <span className='gold'>{item}</span>}
      />
    </>
  );
}

export default App;
