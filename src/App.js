import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import ProductItem from './pages/ProductItem';
import Cart from './pages/Cart';
import Login from './pages/Login';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import CheckOut from './pages/CheckOutPage/CheckOut';
import NotFound from './pages/NotFound';
import Order from './pages/OrderPage/Order';
// import PrivateRouter from './PrivateRouter';

function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/products/:id" element={<ProductItem/>} />
          <Route path="/cart/:id" element={<Cart/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<UserProfile/>} />
          <Route path="/shipping" element={<Shipping/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/checkout" element={<CheckOut/>} />
          <Route path="/order/:id" element={<Order/>} />
          <Route path="*" element={<NotFound/>} />
      </Routes>
      <AppFooter />
    </BrowserRouter>
  );
}

export default App;
