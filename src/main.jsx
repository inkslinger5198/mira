import { StrictMode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Homepage/App.jsx";
import Mira from "./Mirapage/Mira.jsx";
import { UserModeProvider } from "./context/userModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route
          exact
          path="/ai"
          element={
            <UserModeProvider>
              <Mira />
            </UserModeProvider>
          }
        />
      </Routes>
    </HashRouter>
  </StrictMode>
);
