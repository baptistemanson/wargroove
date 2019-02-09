import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            style={{ width: "70%", maxWidth: 300 }}
            alt="logo"
            src="logo.png"
          />
          <Form />
          <div style={{ marginTop: 25, fontSize: 8 }}>
            Made with Love by Baptiste Manson
          </div>
        </header>
      </div>
    );
  }
}

export default App;
