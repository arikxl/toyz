import React from 'react';
import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList/ProductList';

const Home = () => {

  const user = useSelector((state) => state.userLogin);


  return (
    <div>
      {user.userInfo ? (
        <h1>{user.userInfo.name}</h1>
      ) : ''
      }
      <ProductList />
    </div>

  );
};

export default Home;
