import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import Error from '../../components/Loaders/Error';
import Loader from '../../components/Loaders/Loader/Loader';
import { getOrderDetails } from '../../redux/actions/orderActions';





const Order = () => {

  const dispatch = useDispatch();
  const orderId = useParams().id;


  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;
  console.log('orderDetails:', orderDetails)

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return (
    <>
      {loading ? (<Loader />) : error ? (<Error message={error} />) : (

        <div>
          order
          {order._id}
        </div>
      )}
    </>
  )
}

export default Order