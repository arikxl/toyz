import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader';
import { register } from '../redux/actions/userActions';

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
        <div>
            <Link to={'/'}>
                <button>🏠</button>
            </Link>

            {error && <Error message={error} />}
            {loading && <Loader />}

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Name' name="name"
                    value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="text" placeholder='Email' name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="text" placeholder="Password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button>LOGIN</button>
            </form>


            <p>
                <Link to={redirect
                    ? `/login?redirect=${redirect}`
                    : "/login"}>
                    I have an account
                </Link>
            </p>
        </div>
    )
}

export default Register