import React from "react";
import { useState } from "react";

import "./App.css";
import Arithmetic from "./components/Arithmetic";
import Movies from "./components/HuluMovies";
import Popular from "./components/Popular";

function App() {
  return (
    <>
      <Movies />
      <Popular />
      <Arithmetic />
    </>
  );
}

export default App;
