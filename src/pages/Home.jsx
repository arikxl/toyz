import React from 'react';
import styled from "styled-components";

// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import ProductList from '../components/ProductList/ProductList';

const HomeStyled = styled.main`
  height:80vh ;
`;



const Home = () => {

  return (
    <HomeStyled>
      <ProductList />
    </HomeStyled>
  );
};

export default Home;
