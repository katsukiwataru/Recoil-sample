import React from "react";
import { useRecoilState } from "recoil";
import { counterState } from "./atoms";

export const CounterButton = React.memo(() => {
  console.log('CounterButton render');
  const [count, setCount] = useRecoilState(counterState);
  return (
    <>
      <p>{count}</p>
      <p>
        <button onClick={() => setCount(c => c + 1)}>useRecoilState incr</button>
      </p>
    </>
  );
});
