import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import AreaProvider from "./components/context/AreaContext";
import TestZoom from "./components/test/TestZoom";
import TestZoom2 from "./components/test/TestZoom8";
import TestScroll from "./components/test/TestScroll";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AreaProvider>
      {/* <App /> */}
      {/* <TestZoom /> */}
      {/* <TestZoom2 /> */}
      <TestScroll />
    </AreaProvider>
  </React.StrictMode>
);
