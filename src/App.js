
import './App.css';

import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
   
    <Route path="/page/:page" element={<Home/>}></Route>
   
  </Routes>
  );
}

export default App;
