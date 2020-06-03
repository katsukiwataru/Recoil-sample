import React from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilCallback
} from "recoil";
import "./styles.css";

const counterState = atom({
  key: "counterState",
  default: 0
});

const CounterButton = () => {
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
};

const UpdateOnlyButton = () => {
  console.log('UpdateOnlyButton render');
  const setCount = useSetRecoilState(counterState);
  return (
    <p>
      <button onClick={() => setCount(c => c + 1)}>useSetRecoilState incr</button>
    </p>
  );
};

const AlertButton = () => {
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
};

export default function App() {
  const counter = useRecoilValue(counterState);
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <CounterButton />
      <UpdateOnlyButton />
      <AlertButton />
    </div>
  );
}
