import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../redux/actions/cartActions';


const Payment = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress) {
    navigate('/shipping');
  }
  
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/order');
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex column w200">
        <h6>select payment method</h6>
        <div>
          <input type="radio" value={paymentMethod} 
          onChange={(e) => setPaymentMethod(e.target.value)}/>
          <label>PayPal</label>
        </div>
        <button type="submit" className="">Continue</button>
      </form>
    </div>
  )
}

export default Payment