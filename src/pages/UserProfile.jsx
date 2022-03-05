import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../redux/actions/userActions';
import moment from 'moment';




const UserProfile = () => {

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin).userInfo;
    const userDetails = useSelector((state) => state.userDetails);
    // console.log('userDetails:', userDetails)
    const { loading, user } = userDetails;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // useEffect(() => {
    //     dispatch(getUserDetails('profile'))
    // }, [dispatch])

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [dispatch, user])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            alert('Passwords match');

        }
    }

    return (
        <>
            <div>Shalom {userLogin.name}</div>
            <h3>joined: {moment(userLogin.createdAt).format('DD/MM/YY')}</h3>
            <h3>email: {userLogin.email}</h3>

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='UserName' name="name" required
                    value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <input type="email" placeholder='Email' name="email" required
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input type="password" placeholder="Password" name="password"
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="password" placeholder="confirm Password" name="password"
                    value={confirmPassword} required
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <button>update profile</button>
            </form>


        </>
    )
}

export default UserProfile