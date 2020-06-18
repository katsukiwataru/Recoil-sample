import React from "react";
import {useRecoilState } from "recoil";
import { textState } from "./atoms";

export const TextInput = React.memo(() => {
  console.log("TextInput");
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.currentTarget.value);
  }

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <p>Echo: {text}</p>
    </div>
  )
})
