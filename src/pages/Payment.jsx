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
  
  const [paymentMethod, setPaymentMethod] = useState('');
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod !== 'PayPal'&& paymentMethod !== 'Cash') {
      alert('Please choose your payment method')
      return;
    }; 
    dispatch(savePaymentMethod(paymentMethod));
    navigate('/checkout');
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className="flex column w200">
        <h6>select payment method</h6>
        <div>
          <input type="radio" value='PayPal'
          onChange={(e) => setPaymentMethod(e.target.value)}/>
          <label>PayPal</label>
          <input type="radio" value='Cash'
          onChange={(e) => setPaymentMethod(e.target.value)}/>
          <label>Cash</label>
        </div>
        <button type="submit" className="">Continue</button>
      </form>
    </div>
  )
}

export default Payment