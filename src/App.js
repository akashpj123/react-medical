import React from 'react';
import Navbar from './components/Navbar';
import image from './images/pexels-shvetsa-3683088.jpg'
import { useNavigate } from 'react-router-dom';
function App() {
  var navigate=useNavigate();
  function sing(event){
 event.preventDefault();
    navigate('/singup')
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
           
            <img className="img-fluid" src={image} alt="medicine" />
            
          </div>
          <div className="col-md-6 my-auto">
            <h1><b>Medicine Vault</b></h1>
            <hr />
            <div className="bg-gradient p-3 rounded">
              <h5><b>Welcome, </b></h5>
              <p><b>We're delighted to have you back with us. As a registered member of Medicine Vault, you now have access our features to meet your healthcare needs.</b></p>
              <p><b>Here's what you can do now:</b></p>
              <ul>
                <li><b><a className="text-dark" href="/dashboard">Manage Your Medicine</a> - Easily add, edit, or delete medicines from your inventory</b></li>
              </ul>
              <p><b>Explore these features and more to make the most of your Medicine Vault experience. Thank you for choosing us as your trusted healthcare partner!</b></p>
              

              <h5><b>Welcome to Medicine Vault!</b></h5>
              <p><b>where managing your medications is effortless. Register securely, log in, and access your personalized dashboard to add, update, and manage your medications hassle-free. Simplify your medication management journey with us – sign up today!</b></p>
              <button onClick={sing} className="btn btn-info">sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
