import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import axios from 'axios';
function Signup() {
    const [nameone, setnameone] = useState('')
    const [Email, setemail] = useState('')
    const [pass, setpasword] = useState('')
    const [compass, setcompasswoard] = useState('')
    const [errorMessage, seterrorMessage] = useState('')
    var navigat = useNavigate()
    function submitf(event) {
        event.preventDefault();
        var user = {
            name: nameone,
            email: Email,
            password: pass,
            password_confirmation: compass,
        }
        axios.post('https://medicalstore.mashupstack.com/api/register', user).then(response => {
            seterrorMessage('');
            navigat('/');
        }).catch(error => {
            if (error.response.data.errors) {
                seterrorMessage(Object.values(error.response.data.errors).join(' '));
            } else {
                seterrorMessage('Failed to connect to api');
            }
        })
    }
    return (
        <div>
            <Navbar />
            <div className="container-fluid ">
                {errorMessage ? <div className="alert alert-danger">{errorMessage}</div> : ''}
                <div className="signup-form pt-4">
                    <form action="" method="post" className="mx-auto w-75 mt-5 pr-5 pl-5   pb-4 h-25 ">
                        <h2 className="font-weight-bold pt-5">Register</h2>

                        <div className="form-group">
                            <div className="row">
                                <div className="col"><input type="text" className="form-control" name="first_name" value={nameone} placeholder="First Name" required="required" onInput={(event) => setnameone(event.target.value)} />
                                </div>

                            </div>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" placeholder="Email" required="required"
                                value={Email} onInput={(event) => setemail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" name="password" placeholder="Password" required="required"
                                value={pass} onInput={(event) => setpasword(event.target.value)} />
                        </div>
                        <div className="form-group ">
                            <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required" value={compass} onInput={(event) => setcompasswoard(event.target.value)} />
                        </div>
                        <div className="form-group ">
                            <button type="submit" className="btn btn-success btn-lg btn-block px-5  justify-content-center" onClick={submitf}>Register Now</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <NavLink to="/login" className="nav-link">Login</NavLink></div>
                </div>
            </div>
        </div>
    );
}


export default Signup;
