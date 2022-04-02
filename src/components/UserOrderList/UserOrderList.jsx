import React from 'react';

import Loader from '../Loaders/Loader/Loader'
import Error from '../Loaders/Error';
import { Link } from 'react-router-dom';
import moment from 'moment';

const UserOrderList = (props) => {
    const { orders, loading, error } = props;

    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : error ? (
                    <Error massage={error} />
                ) : (
                    <div>
                        {
                            orders.length === 0 ? (
                                <div style={{ background: 'orange' }}>
                                    No Orders
                                    <Link to={'/'}>Start Shopping</Link>
                                </div>
                            ) : (
                                <div>
                                    <table>
                                        <thead>
                                            <tr>
                                                <td>ID</td> 	&nbsp;
                                                <td>STATUS</td>	&nbsp;
                                                <td>DATE</td>	&nbsp;
                                                <td>TOTAL</td>	&nbsp;
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order) => (
                                                <tr key={order._id}
                                                    className={`${order.isPaid ? " success" : "danger"}`}>
                                                    <td>
                                                        <a href={`/order/${order._id}`}
                                                            target="_blank" rel="noreferrer" >{order._id}</a>
                                                    </td>&nbsp;
                                                    <td>{order.isPaid ? "Paid" : "not paid"}</td>&nbsp;
                                                    <td>{order.isPaid
                                                        ? moment(order.paidAt).calendar()
                                                        : moment(order.createdAt).calendar()}</td>&nbsp;
                                                    <td>{order.totalPrice}</td>&nbsp;
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }

                    </div>
                )
            }
        </div>
    )
}

export default UserOrderList