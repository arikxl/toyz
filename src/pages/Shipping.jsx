import React ,  { useState }from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";



import {saveShippingAddress} from '../redux/actions/cartActions';

const ShippingStyled = styled.main`
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
    margin: 20px;

    input {
      padding: 5px ;
      border: 1px solid hotpink ;
      margin: 10px ;
      width: 100% ;
    }

    button {
      background-color: hotpink ;
      font-size: 16px ;
      padding: 5px 10px;
      color: white ;
      border: none ;
      width: 100% ;
    }
  }
`;

const Shipping = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [zipcode, setZipcode] = useState(shippingAddress.zipcode);



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ address, city, zipcode}));
        navigate('/payment');
    };

    return (
        <ShippingStyled>
            <form onSubmit={handleSubmit} className="flex column w200">
                <h3>delivery address</h3>
                <input type="text" placeholder="Enter delivery address"
                    value={address} required
                    onChange={(e) => setAddress(e.target.value)} />
                <input type="text" placeholder="Enter city"
                    value={city} required
                    onChange={(e) => setCity(e.target.value)} />
                <input type="number" placeholder="Enter zipcode"
                    value={zipcode} required min={10000}
                    onChange={(e) => setZipcode(e.target.value)} />
                <button type="submit" className="">Continue</button>
            </form>
        </ShippingStyled>
    )
}

export default Shipping