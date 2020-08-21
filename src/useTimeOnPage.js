import { useState, useEffect } from "react";
export function useTimeOnPage() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalTime = setInterval(() => setTime((prev) => prev + 1), 1000);
    console.count("initial interval");
    return () => {
      console.count("stop interval");
      return clearInterval(intervalTime);
    };
  }, []);
  return time;
}
