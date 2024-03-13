import React from "react";
import { useState } from "react";

import "./App.css";
import Arithmetic from "./components/Arithmetic";
import HuluWorld from "./components/HuluMovies";
import HuluPorpular from "./components/HuluPopular";


function App() {
  return (
    <>
      <HuluWorld />
      <br />
      <HuluPorpular />

     
      <div>
        <Arithmetic />
      </div>
    </>
  );
}

export default App;
