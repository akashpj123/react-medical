import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import image from '../images/pexels-shvetsa-3683098.jpg'
function Contact() {
    var navigate=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
    console.log('Form submitted');
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <img className="img-fluid " src={image} alt="img" />
        </div>
        <div className="col-md-6 my-auto">
          <h1 className="mt-5"><b>Contact us</b></h1>
          <hr />
          <form onSubmit={handleSubmit} className="bg-gradient p-3 rounded">
            <div className="mb-3">
              <label htmlFor="name" className="form-label"><b>Full Name</b></label>
              <input type="text" name="name" className="form-control" id="name" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label"><b>Email</b></label>
              <input type="email" name="email" className="form-control" id="email" placeholder="Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label"><b>Complaint</b></label>
              <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark"><b>Submit</b></button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
