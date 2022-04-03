import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";


import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { register } from '../redux/actions/userActions';

const RegisterStyled = styled.main`
  height:80vh ;
`;

const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const redirect = location.search ? location.search.split("=")[1] : "/";

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userRegister = useSelector((state) => state.userRegister);
    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) navigate(redirect)
    }, [userInfo, navigate, redirect]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password))
    }

    return (
        <RegisterStyled>
            <Link to={'/'}>
                <button>🏠</button>
            </Link>

            {error && <Error message={error} />}
            {loading && <Loader />}

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Name' name="name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" placeholder='Email' name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button>Register</button>
            </form>

            <p>
                <Link to={redirect
                    ? `/login?redirect=${redirect}`
                    : "/login"}>
                    I have an account
                </Link>
            </p>
        </RegisterStyled>
    );
};

export default Register;