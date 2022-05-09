import React from 'react';
import './App.css';
import {
  BrowserRouter as Router , 
  Routes,
  Route
} from "react-router-dom";
import List from "./page/List"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
