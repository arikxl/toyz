import React from 'react';
import styled from "styled-components";
import { useParams,} from 'react-router-dom';


// import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList/ProductList';

const HomeStyled = styled.main`
  height:80vh ;
`;



const Home = () => {

  const searchWord = useParams().searchWord || '';
  const pageNumber = useParams().pageNumber;

  return (
    <HomeStyled>
      <ProductList searchWord={searchWord} pageNumber={pageNumber}/>
    </HomeStyled>
  );
};

export default Home;
