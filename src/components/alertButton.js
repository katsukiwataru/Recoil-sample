import React from "react";
import { useRecoilCallback } from "recoil";
import { counterState } from "./atoms";

export const AlertButton = React.memo(() => {
  console.log('AlertButton render');
  const showAlert = useRecoilCallback(async ({ getPromise }) => {
    const counter = await getPromise(counterState);

    alert(counter);
  }, []);

  return (
    <p>
      <button onClick={showAlert}>Show counter value</button>
    </p>
  );
});
