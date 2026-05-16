import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GameProvider } from "./Context.jsx";

//initialize the React application by targeting the root element in the HTML file
//enclose the application within StrictMode for development checks

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {}
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>,
);
