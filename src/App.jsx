import React from "react";
import { useState } from "react";

import "./App.css";
import Arithmetic from "./components/Arithmetic";
import Movies from "./components/HuluMovies";
import Popular from "./components/Popular";
import Pics from "./assets/img-2.png";

function App() {
  return (
    <>
      <Movies />
      <Popular />
      <Arithmetic />

      <Pics />
    </>
  );
}

export default App;
