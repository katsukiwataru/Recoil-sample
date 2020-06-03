import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={<p>Sus.</p>}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Suspense>
  ,
  rootElement
);
