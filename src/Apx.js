import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import DnDFlow from "./DnDFlow";
function Apx() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="module/:name" element={<DnDFlow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Apx;
