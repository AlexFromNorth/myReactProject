import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Authorization } from "./components/Authorization/Authorization";
import { Registration } from "./components/Registration/Registration";
import { Header } from "./components/Header/Header";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App-content">
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
