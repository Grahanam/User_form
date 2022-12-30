

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Form from "./pages/form";
import Page from "./pages/page";

import './App.css';



function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="add" element={<Page />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
