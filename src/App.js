import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ProductItem from './pages/ProductItem';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:id" element={<ProductItem/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
