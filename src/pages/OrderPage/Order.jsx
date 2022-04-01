import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import moment from 'moment';
import styled from "styled-components";




import Error from '../../components/Loaders/Error';
import Loader from '../../components/Loaders/Loader/Loader';
import { getOrderDetails } from '../../redux/actions/orderActions';
import { Link } from 'react-router-dom';
import { addDecimals } from '../../utils/utils';

const OrderStyled = styled.div`
  width: 80%;
  display: flex ;
  flex-direction: column ;
  margin: 10px auto;
  justify-content: space-between ;
  
    hr {
      margin-bottom: 20px;
    }
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
  const orderId = useParams().id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  if (!loading) {
    order.itemsPrice = addDecimals(
      order?.orderItems?.reduce((total, item) =>
        total + item.qty * item.price, 0) / 1.17
    );
  }


  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);



  return (
    <>
      {loading ? (<Loader />) : error ? (<Error message={error} />) : (

        <OrderStyled>
          <div>
            <h1>costumer</h1>
            <p>{order.user.name}</p>
            <p>
              <a href={`mailto:${order.user.email} `}>{order.user.email}</a>
            </p>
          </div>
          <div>
            <h1>order info</h1>
            <p>
              order number:{order._id}
            </p>
            <p>{order.paymentMethod}</p>
            {
              order.isPaid ? (
                <h3>paid on : {moment(order.paidAt).calendar()}</h3>
              ) : (
                <h3>not paid</h3>
              )
            }
          </div>
          <div>
            <h1>deliver to:</h1>
            <p>{order.shippingAddress.city}</p>
            <p>{order.shippingAddress.address}</p>
            <p>{order.shippingAddress.zipcode}</p>
            {
              order.isDelivered ? (
                <h3>delivered on : {moment(order.deliveredAt).calendar()}</h3>
              ) : (
                <h3>not delivered</h3>

              )
            }
          </div>
          <hr />
          <div>
            {
              order.orderItems.length === 0 ? (
                <>
                  <Error message="your order is empty" />
                </>
              ) : (
                <div>
                  {order.orderItems.map((item, index) => (
                    <div key={index} className="cart-item">
                      <Link to={`/products/${item.product}`}>
                        <img src={item.img} alt="" />
                      </Link>
                      <p> {item.title} </p>
                      <p> Quantity: {item.qty} </p>
                      <p> Subtotal: ${item.qty * item.price} </p>
                    </div>
                  ))}

                  <div className="order-summary">
                    <table>
                      <tbody>
                        <tr>
                          <td>Products</td>
                          <td>
                            {order.itemsPrice && (
                              `${order.itemsPrice}`
                            )}
                          </td>
                        </tr>
                        <tr>
                          <td>Tax</td>
                          <td>${order.taxPrice}</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td>${order.shippingPrice.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>${order.totalPrice}</td>
                        </tr>
                      </tbody>
                    </table>
                    {/* <button type="submit" onClick={handleSubmit}>
                      Place Order
                    </button> */}
                  </div>
                </div>
              )
            }
          </div>


        </OrderStyled>

      )}
    </>
  )
}

export default Order