import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Surpresa from "./components/Surprise";
import Gallery from "./components/Gallery";
import Letter from "./components/Letter";
import Music from "./components/Music";
import Game from "./components/Game";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/surpresa" element={<Surpresa />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/carta" element={<Letter />} />
        <Route path="/music" element={<Music />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;