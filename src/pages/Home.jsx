import React from 'react';
import styled from "styled-components";
import { useParams,} from 'react-router-dom';


// import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList/ProductList';

const HomeStyled = styled.main`
  height:80vh ;
`;



const Home = () => {

  const searchWord = useParams().searchWord;

  return (
    <HomeStyled>
      <ProductList searchWord={searchWord}/>
    </HomeStyled>
  );
};

export default Home;
