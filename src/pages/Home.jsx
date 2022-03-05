import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


import ProductList from '../components/ProductList/ProductList';

const UserStyled = styled.section`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
  }
`;

const Home = () => {

  const user = useSelector((state) => state.userLogin).userInfo;

  return (
    <>
      {user ? (
        <UserStyled>
          <img src={`https://avatars.dicebear.com/api/bottts/${user.name}.svg`} alt="" />
          <h1>{user.name}</h1>
        </UserStyled>
      ) : (
        <Link to='/login'>
          <button>login</button>
        </Link>
      )}

      <ProductList />
    </>


  );
};

export default Home;
