import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

import { savePaymentMethod } from '../redux/actions/cartActions';

const PaymentStyled = styled.main`
      height:80vh ;
    width: 400px ;
    margin: 0 auto ;
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    form {
    display: flex ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center ;
    margin: 20px ;
    width:100% ;

    .flex {
      margin: 20px 0;
      align-items: center ;

      label {
        margin-left: 5px ;
      }
    }

    button {
      background-color: hotpink ;
      font-size: 16px ;
      padding: 5px 25px;
      color: white ;
      border: none ;
    }
  }
`;


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
    <PaymentStyled>
      <form onSubmit={handleSubmit} className="flex column w200">
        <h3>select payment method</h3>
        <div className='flex'>
          <input type="radio" value='PayPal'
          onChange={(e) => setPaymentMethod(e.target.value)}/>
          <label>PayPal or credit card</label>
        </div>
        <button type="submit" className="">Continue</button>
      </form>
    </PaymentStyled>
  )
}

export default Payment