import axios from 'axios';
import React, { useState } from 'react'
import '../App.css'

function Login({ token, setToken }) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const loginHandler = () => {
        setError('');
        setPassword('');
        setUserName('');
        axios({
            url: 'https://fakestoreapi.com/auth/login',
            method: 'POST',
            data: {
                username: userName,
                password: password,
            },
        })
            .then((res) => {
                // console.log(res.token.data)
                setToken(res.data.token);
                localStorage.setItem('userToken', res.data.token)
            })
            .catch((err) => {
                // console.log(err.response.data)
                setError(err.response.data)
            })
    }

    return (
        <div className='login'>
            <h1>Login</h1>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} type='text' placeholder='Username' />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            {error && <small>{error}</small>}
            <button onClick={loginHandler} className='btn'>Login</button>
            <p>username: "mor_2314", password: "83r5^_"</p>
        </div>
    )
}

export default Login
