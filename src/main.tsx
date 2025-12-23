import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; // <-- obligatoire pour GitHub Pages
import App from "./App.tsx";
import "./index.css";

// CHANGE TITLE DE L'ONGLET
document.title = "E. M. Talbi | Portfolio ";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
