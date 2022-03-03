import React from 'react';
import { useSelector } from 'react-redux';
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

  const user = useSelector((state) => state.userLogin);
  const {_id, name, email, isAdmin, } = user.userInfo

  const imgUrl = `https://avatars.dicebear.com/api/bottts/${name}.svg`

  return (
    <div>
      {user.userInfo ? (
        <UserStyled>
        <img src={imgUrl} alt="" />
        <h1>{name}</h1>
        </UserStyled>
      ) : ''
      }
      <ProductList />      
    </div>

  );
};

export default Home;
