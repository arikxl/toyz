import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    width: 100%;
    height: 70px;
    background-color: hotpink;
    
    .wrapper {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            margin-right: 20px;
        }
    }
`;

const AppHeader = () => {

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    return (
        <HeaderStyled>
            <div className="wrapper">
                <Link to={'/'}>
                    <div>LOGO</div>
                </Link>
                <ul style={{ display: 'flex' }}>
                    <li>about</li>
                    <li>service</li>
                    <li>product</li>
                </ul>

                <Link to={'/cart'}>
                    bag: {cartItems.length}
                </Link>
            </div>
        </HeaderStyled>
    );
};

export default AppHeader;
