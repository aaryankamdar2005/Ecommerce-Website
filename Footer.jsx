import React from 'react';
import logo from '/src/logo.png';

function Footer() {
  return (
    <div className='bg-gray-300 w-auto flex flex-col items-center space-y-5 mt-16 lg:flex-row justify-around items-start h-auto space-y-10 space-y-0 space-x-10 p-10'>
      
     
      <div className='flex flex-col items-center lg:items-start'>
        <img src={logo} alt="Logo" />
        <p>© 2024 Flone. All Rights Reserved</p>
      </div>

      <div className='flex flex-col items-center lg:items-start'>
        <p className='font-bold'>About Us</p>
        <p>About Us</p>
        <p>Store location</p>
        <p>Contact</p>
        <p>Orders tracking</p>
      </div>  

      <div className='flex flex-col items-center lg:items-start'>
        <p className='font-bold'>USEFUL LINKS</p>
        <p>Returns</p>
        <p>Support Policy</p>
        <p>Size guide</p>
        <p>FAQs</p>
      </div>

 
      <div className='flex flex-col items-center lg:items-start '>
        <p className='font-bold'>FOLLOW US</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>


      <div className='flex flex-col items-center  lg:items-start justify-center'>
        <p className='font-bold'>SUBSCRIBE</p>
        <div className='shadow-lg w-auto h-auto p-4 text-center lg:text-left'>
          <p className='mb-4'>Get E-mail updates about our latest shop<br/> and special offers.</p>
          <p>Enter your email address...</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
