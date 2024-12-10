import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Gallery from "./pages/Gallery.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/example_site">
          <Route index element={<App />}></Route>
          <Route path="gallery" element={<Gallery />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
