import React from "react";
import { useSetRecoilState } from "recoil";
import { counterState } from "./atoms";

export const UpdateOnlyButton = React.memo(() => {
  console.log('UpdateOnlyButton render');
  const setCount = useSetRecoilState(counterState);
  return (
    <p>
      <button onClick={() => setCount(c => c + 1)}>useSetRecoilState incr</button>
    </p>
  );
});
