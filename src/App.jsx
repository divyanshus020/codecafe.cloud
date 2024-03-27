import { BrowserRouter } from "react-router-dom";
import React from 'react'
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
          <Navbar />
    </BrowserRouter>
    
  );
}

export default App;
