import MyButton from "./Components/MyButton";

import "./App.css";

import { useState } from "react";

const title = "Hello world in variable";

const secondButtonTitle = "Second button";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>{title}</h1>

      <MyButton onClickProp={handleClick} text="First button" />

      <MyButton onClickProp={handleClick} text={secondButtonTitle} />

      <h1>Click so many times: {count}</h1>
    </div>
  );
};

export default App;
