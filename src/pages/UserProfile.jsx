import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import Error from '../components/Loaders/Error';
import Loader from '../components/Loaders/Loader/Loader.jsx'
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions';


const UserProfile = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin).userInfo;

    const userDetails = useSelector((state) => state.userDetails);
    const { error, user } = userDetails;

    const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
    const { loading: updateLoading } = userProfileUpdate;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        dispatch(getUserDetails('profile'))
    }, [dispatch])

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            dispatch(updateUserProfile({
                id: userLogin._id,
                name,
                email,
                password
            }))
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }

    return (
        <>
            <div>Shalom {userLogin.name}</div>
            <h3>joined: {moment(userLogin.createdAt).format('DD/MM/YY')}</h3>
            <h3>email: {userLogin.email}</h3>
            {updateLoading && <Loader />}
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='UserName' name="name" required
                    value={name ? name : ''} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" placeholder='Email' name="email" required
                    value={email ? email : ''} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" name="password"
                    value={password ? password : ''} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="password" placeholder="confirm Password" name="password"
                    value={confirmPassword ? confirmPassword : ''} required
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <button>update profile</button>
            </form>
        </>
    );
};

export default UserProfile