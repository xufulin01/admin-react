import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./views/login/index";
import { Info } from "./views/info/index";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/info" element={<Info />}></Route>
    </Routes>
  );
};
export default App;
