import './App.css';
import { Route, Routes} from "react-router-dom"
import React from 'react';
import Home from './components/Home/Home.jsx'

function App() {
  return (
    <Routes>

      <Route exact path="/"  element={<Home />}  />

    </Routes>
  );
}

export default App;