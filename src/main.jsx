import { StrictMode } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Homepage/App.jsx";
import Mira from "./Mirapage/Mira.jsx";
import { UserModeProvider } from "./context/userModeContext.jsx";
import Login from "./Login/Login.jsx";
import FollowUp from "./FollowUp/FollowUp.jsx";
import SignUp from "./Signup/SignUp.jsx";
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
        <Route
          exact
          path="/login"
          element={
            <UserModeProvider>
              <Login />
            </UserModeProvider>
          }
        />
        <Route exact path="/followup" element={
          <UserModeProvider>
            <FollowUp/>
          </UserModeProvider>
        }/>
        <Route exact path="/signup" element={
          <UserModeProvider>
            <SignUp/>
          </UserModeProvider>
        }/>
      </Routes>
    </HashRouter>
  </StrictMode>
);
