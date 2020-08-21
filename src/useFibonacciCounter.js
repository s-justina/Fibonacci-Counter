import { useState } from "react";

function fib2(n) {
  if (n <= 1) {
    return [n - 1, n];
  }
  const [fNminus2, fNminus1] = fib2(n - 1);
  return [fNminus1, fNminus1 + fNminus2];
}

export function useFibonacciCounter(initialN) {
  const [n, setN] = useState(initialN);
  const [fibs, setFibs] = useState(getInitialFibs);
  const currentFibonacciNumber = fibs.current;

  function getInitialFibs() {
    const [prev, current] = fib2(initialN);
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

  function resetN() {
    setN(initialN);
    setFibs(getInitialFibs);
  }
  return {
    n,
    currentFibonacciNumber,
    incrementN,
    decrementN,
    resetN
  };
}
