import React, { useState } from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setUser } from "../store/authSlice";
import checkGuest from './checkguest';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleSubmit(event) {
        event.preventDefault();

        axios.post('https://medicalstore.mashupstack.com/api/login', {
            email: email,
            password: password,
        }).then(response => {
            setErrorMessage('');
            var user = {
                email: email,
                token: response.data.token
            }
            dispatch(setUser(user));
            navigate('/');

        })
            .catch(error => {
                if (error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else if (error.response.data.message) {
                    setErrorMessage(error.response.data.message);
                } else {
                    setErrorMessage('Failed to login user. Please contact admin');
                }
            });
    }

    return (
        <div >
            <Navbar />
            <div >
            <div>{errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}</div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mx-auto w-75 mt-5 pr-5 pl-5  pb-4 h-25" >
                    <div className="form-group pt-4 ">
                        <h2 className="font-weight-bold pt-5">Login</h2>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className="form-group ">
                        <button type="submit" className="btn btn-primary px-5  justify-content-center">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    );
}

export default checkGuest(Login);
