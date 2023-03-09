
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import Crypto_context from './Crypto_context';

ReactDOM.render(
  <React.StrictMode>
    {/*  eslint-disabponent Crypto_cole-next-line */}
    <Crypto_context>
      <App />
    </Crypto_context>
  </React.StrictMode>,
  document.getElementById("root")
);

