import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Error from '../../components/Loaders/Error';



const OrderStyled = styled.div`
  width: 80%;
  height: 80px; 
  background-color: pink;
  display: flex ;
  margin: 10px auto;

  .order-info {
    flex:1;
  }
`;

const CartStyled = styled.div`
  width: 80%;
  display: flex ;
  margin: 10px auto;
  justify-content: space-between ;

  .cart-items {
    width: 60% ;
    border: 1px solid grey;
    .cart-item{
      display: flex ;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  .order-summary{
    width: 30%;
    border: 1px solid grey;
  }
`;



const Order = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.userLogin).userInfo;


  return (
    <div>
      <OrderStyled>
        <div className="order-info">
          <h4>Costumer</h4>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
        <div className="order-info">
          <h4>Order Info</h4>
          <p>shipping: {cart.shippingAddress.city}</p>
          <p>Pay method: {cart.paymentMethod}</p>
        </div>
        <div className="order-info">
          <h4>Deliver to</h4>
          <p>Address: {cart.shippingAddress.address}</p>
          <p>zip: {cart.shippingAddress.zipcode}</p>
        </div>
      </OrderStyled>
      <CartStyled>
        <div className="cart-items">
          {cart.cartItems.length === 0 ? (
            <>
              <Error message="Your cart is empty" />
              <Link to={'/'}>SHOP NOW</Link>
            </>
          )
            :
            (
              <>
                {
                  cart.cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <Link to={`/products/${item.product}`}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                      </Link>
                    </div>
                  ))
                }
              </>
            )
          }





        </div>
        <div className="order-summary">
          ssss
        </div>
      </CartStyled>

    </div>
  )
}

export default Order