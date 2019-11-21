import React from "react";
import ReactDOM from "react-dom";
import DogFetcher from "./DogFetcher";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello DOGGO</h1>
      <h2>Click in Get Doggo or Double click in Doggo image!</h2>
      <DogFetcher />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
