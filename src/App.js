import logo from "./logo.svg";
import "../style.css";
import React from "react";

function App() {
  const [myBoolean, setMyBoolean] = React.useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => {
            setMyBoolean(true);
          }}
        >
          ABCD {myBoolean.toString()}
        </button>
      </header>
    </div>
  );
}

export default App;
