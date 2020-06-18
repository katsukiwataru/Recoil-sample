import React from "react";
import { useRecoilValue } from "recoil";
import { AlertButton } from "./components/alertButton";
import { CounterButton } from "./components/counterButton";
import { UpdateOnlyButton } from "./components/updateOnlyButton";
import { counterState } from "./components/atoms";
import { TextInput } from "./components/textInput";
import "./styles.css";

export default function App() {
  const counter = useRecoilValue(counterState);
  return (
    <div className="App">
      <h1>counter {counter}</h1>
      <CounterButton />
      <UpdateOnlyButton />
      <AlertButton />
      <TextInput />
    </div>
  );
}
