import React from 'react';

import Navbar from './Navbar';
import image from '../images/pexels-pixabay-159211.jpg'
function Aboutus() {
  return (
    <><Navbar />
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="pt-5 mt-5">
          <img className="img-fluid" src={image} alt="img" />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <h1><b>About Medicine Vault</b></h1>
          <hr />
          <div className="bg-gradient p-3 rounded">
            <p>
              <b>Welcome to Medicine Vault, your trusted destination for all your medical needs. At Medicine Vault, we are
                dedicated to providing high-quality medicines and healthcare products to our customers.

                Our mission is to ensure easy access to essential medicines and healthcare supplies,
                empowering individuals to lead healthy and fulfilling lives. With a wide range of products
                and a user-friendly interface, we strive to make your shopping experience seamless and
                convenient.

                At Medicine Vault, we prioritize customer satisfaction above all else. Our team of experienced
                professionals is committed to delivering personalized service and expert advice to meet your
                unique healthcare needs.

                Join us in our journey towards better health and well-being. Explore our website to discover
                a comprehensive selection of medicines, wellness products, and healthcare essentials. Thank
                you for choosing MedVault as your trusted healthcare partner.
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Aboutus;
