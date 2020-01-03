import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./button";
import Wrapper from "./lib/wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper
        inject={store => {
          window.$modal = store;
        }}
      >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Button />
      </Wrapper>
    </div>
  );
}

export default App;
