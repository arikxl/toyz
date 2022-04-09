import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { logout } from '../../redux/actions/userActions';

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
        button {
            background-color: white ;
            font-size: 16px ;
            padding:5px 15px ;
            color: hotpink ;
            border: none ;
        }
    };
`;

const UserStyled = styled.section`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
`;


const AppHeader = () => {
    const [searchWord, setSearchWord] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const user = useSelector((state) => state.userLogin).userInfo;

    const handleLogout = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to log out?')) {
            dispatch(logout());
        } else return;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchWord.trim()) {
            navigate(`/search/${searchWord}`);
        } else {
            navigate(`/`);
        };
    };

    return (
        <HeaderStyled>
            <div className="wrapper">
                <Link to={'/'}>
                    <div>LOGO</div>
                </Link>

                {user ? (
                    <UserStyled>
                        <Link to='/profile'>
                            <img src={`https://avatars.dicebear.com/api/bottts/${user._id}.svg`} alt="" />
                        </Link>
                        <h3>{user.name}</h3>
                        <button onClick={handleLogout}>logout</button>
                    </UserStyled>
                ) : (
                    <Link to='/login'>
                        <button>login</button>
                    </Link>
                )}

                <div>
                    <form onSubmit={handleSearch}>
                        <input type="search" placeholder='Search...'
                            onChange={(e) => setSearchWord(e.target.value)}
                            />
                        <button type='submit'>
                            🔎
                        </button>
                    </form>
                </div>

                <Link to={'/cart'}>
                    bag: {cartItems.length}
                </Link>
            </div>
        </HeaderStyled>
    );
};

export default AppHeader;
