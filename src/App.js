import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DnDFlow from "./DnDFlow";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="module/:name" element={<DnDFlow />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
