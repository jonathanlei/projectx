import "./App.css";
import { useState, useEffect } from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { TailwindThemeProvider, Button } from "tailwind-react-ui";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
