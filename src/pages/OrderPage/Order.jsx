import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Error from '../../components/Loaders/Error';

import { addDecimals } from '../../utils/utils';


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
    padding: 10px;
    .cart-item{
      border: 1px solid grey;
      display: flex ;
      flex-direction: row ;
      margin-bottom:10px ;
      img {
        width: 50px;
        height: 50px;
      }
      p {
        padding: 0 15px;
      }
    }
  }
  .order-summary{
    width: 30%;
    border: 1px solid grey;
    table{

      td{
        padding-left: 20px ;
      }
    }
  }
`;



const Order = () => {

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.userLogin).userInfo;

  cart.itemsPrice = addDecimals(
    cart?.cartItems?.reduce((total, item) =>
      total + item.qty * item.price, 0) / 1.17
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 150 ? 0 : 20);
  cart.taxPrice = addDecimals(+((0.17 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    +(cart.itemsPrice) + 
    +(cart.taxPrice) +
    +(cart.shippingPrice)
  ).toFixed(2);

  const handleSubmit = () => {

  }

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
                      </Link>
                      <p> {item.title} </p>
                      <p> Quantity: {item.qty} </p>
                      <p> Subtotal: ${item.qty * item.price} </p>
                    </div>
                  ))
                }
              </>
            )}

        </div>
        {cart.cartItems.length > 0 && (
          <div className="order-summary">
            <table>
              <tbody>
                <tr>
                  <td>Products</td>
                  <td>${cart.itemsPrice}</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>${cart.taxPrice}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>${cart.shippingPrice}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>${cart.totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <button type="submit" onClick={handleSubmit}>
              Place Order
            </button>
          </div>
        )}
      </CartStyled>

    </div>
  )
}

export default Order