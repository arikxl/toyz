import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { login } from '../redux/actions/userActions';

const LoginStyled = styled.main`
  height:80vh ;
`;

const Login = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = user;

  useEffect(() => {
    if (userInfo) navigate(redirect)
  }, [userInfo, navigate, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password))
  }

  return (
    <LoginStyled>
      <Link to={'/'}>
        <button>🏠</button>
      </Link>

      {error && <Error message={error}/>}
      {loading && <Loader />}

      <form onSubmit={handleSubmit} >
        <input type="email" placeholder='Email' name="email"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="password" placeholder="Password" name="password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button>LOGIN</button>
      </form>


      <p>
        <Link to={redirect
          ? `/register?redirect=${redirect}`
          : "/register"}>
          Create a new account
        </Link>
      </p>
    </LoginStyled>
  )
}

export default Login