import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { useTimeOnPage } from "./useTimeOnPage";
import { useFibonacciCounter } from "./useFibonacciCounter";

function FibonacciCounter({ initialN }) {
  const {
    n,
    currentFibonacciNumber,
    incrementN,
    decrementN,
    resetN
  } = useFibonacciCounter(initialN);

  useEffect(() => {
    document.title = `It's calculated: ${currentFibonacciNumber}`;
    console.count("It is rendering");
  }, [currentFibonacciNumber]);

  return (
    <div>
      <h1>
        fib({n}) == {currentFibonacciNumber}
      </h1>
      <button onClick={incrementN}>
        <h3>+1</h3>
      </button>
      <button onClick={decrementN}>
        <h3>-1</h3>
      </button>
      <button onClick={resetN}>
        <h3>reset</h3>
      </button>
    </div>
  );
}

function TimeOnPage() {
  const time = useTimeOnPage();
  return <h3>You have spent {time} seconds on this page.</h3>;
}

function App() {
  const [clientSpying, setClientSpying] = useState(false);
  const time = useTimeOnPage();
  return (
    <div className="App">
      <FibonacciCounter initialN={1} />
      <button onClick={() => setClientSpying((prev) => !prev)}>
        Toggle spying on user
      </button>
      {clientSpying && <TimeOnPage />}
      <h4>Time on main page: {time}</h4>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
