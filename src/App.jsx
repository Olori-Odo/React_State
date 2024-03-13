import React from "react";
import { useState } from "react";

import "./App.css";
import Arithmetic from "./components/Arithmetic";
import Movies from "./components/HuluMovies";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <div>
        <Movies />
      </div>

      <div>
        <Popular />
      </div>

      <div>
        <Arithmetic />
      </div>
    </>
  );
}

export default App;
