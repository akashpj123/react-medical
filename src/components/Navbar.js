import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './store/authSlice';

function Navbar() {
  const user = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    if (user) {
      axios.post('https://medicalstore.mashupstack.com/api/logout', {}, {
        headers: { 'Authorization': 'Bearer ' + user.token }
      }).then(() => {
        dispatch(removeUser());
        navigate('/login');
      }).catch((error) => {
        console.error('Logout error:', error);
        
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
      <NavLink className="navbar-brand font-weight-bold text-white" to="/">Medicines</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to={'/'} className="nav-link text-light" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/blog/posts"} className="nav-link text-light" >Medicine</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-light" >Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={'/Aboutus'}className="nav-link text-light" >About</NavLink>
          </li>
          {user ? (
            <li className="nav-item">
              <span className="nav-link text-light" onClick={logout}>Logout</span>
            </li>
          ) : (
            <li className="nav-item">
              <NavLink to={'/login'}className="nav-link text-light" activeClassName="active">Login</NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink to={'/singup'}  className="nav-link text-light" >Signup</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
