import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </Router>
  );
}

export default App;
