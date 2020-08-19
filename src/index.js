import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

function App() {
  function FibonacciCounter({ initialN }) {
    const [n, setN] = useState(initialN);
    const [fibs, setFibs] = useState(getInitialFibs);

    function getInitialFibs() {
      const prev = fib(n - 1);
      const current = fib(n);
      return { prev: prev, current: current, next: prev + current };
    }

    const incrementN = () => {
      setN((prevN) => {
        const newN = prevN + 1;
        setFibs((prevFibs) => ({
          prev: prevFibs.current,
          current: prevFibs.next,
          next: prevFibs.current + prevFibs.next
        }));
        return newN;
      });
    };

    const decrementN = () => {
      setN((prevN) => {
        const newN = prevN - 1;
        setFibs((prevFibs) => ({
          prev: prevFibs.current - prevFibs.prev,
          current: prevFibs.prev,
          next: prevFibs.current
        }));
        return newN;
      });
    };

    return (
      <div>
        <h1>
          fib({n}) == {fibs.current}
        </h1>
        <button onClick={incrementN}>
          <h3>+1</h3>
        </button>
        <button onClick={decrementN}>
          <h3>-1</h3>
        </button>
        <button
          onClick={() => {
            setN(initialN);
            setFibs(getInitialFibs);
          }}
        >
          <h3>reset</h3>
        </button>
      </div>
    );
  }
  return (
    <div className="App">
      <FibonacciCounter initialN={35} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
