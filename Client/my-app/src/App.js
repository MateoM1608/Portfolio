import { Route, Routes} from "react-router-dom"
import React from 'react';
import Landing from './components/Landing.jsx'

function App() {
  return (
    <div className="app_container">
    <Routes>

     <Route exact path="/"  element={<Landing />}  />

    </Routes>
    </div>
  );
}

export default App;
