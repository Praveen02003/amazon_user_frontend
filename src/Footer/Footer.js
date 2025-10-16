import React from 'react'
import amazonimage from '../assets/amazon.png'
import '../Footer/Footer.css'
import { useNavigate } from 'react-router-dom'
export const Footer = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className='footer'>
        <div className="footer-top">
          <div className="footer-column">
            <h3>About</h3>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Smartcart Science</p>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Returns</p>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p onClick={()=>{navigate("/contactus")}}>Contact us</p>
          </div>
        </div>

        <div className="footer-bottom">
          <img src={amazonimage} alt="img" className='footerimage' />
          <h4>Smartcart.in | Version : 1.0 | All Rights Reserved @ 2025</h4>
        </div>
      </div>
    </div>

  )
}
