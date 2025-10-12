import React, { useContext, useEffect } from 'react'
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom';
import amazonimage from '../assets/amazon.png'
import { logout } from '../Functions/Logoutdata';
import { Mycontext } from '../App'
import { getcartlength } from '../Functions/Getcartlength';
import { ShoppingCart } from "lucide-react";
import axios from '../Axios/Axios.js';
export const Header = () => {
  const {
    count,
    setCount,
    showavatar,
    setShowavatar
  } = useContext(Mycontext)

  const navigate = useNavigate()

  useEffect(() => {
    //console.log("Count changed:", count);
  }, [count])

  return (
    <div className="header">
      {/* ===== Left: Logo + Brand ===== */}
      <div className="header-left" onClick={() => navigate('/')}>
        <img src={amazonimage} alt="Amazon Logo" className="logoimage" />
        <h1>Amazon.in</h1>
      </div>

      {/* ===== Center: Nav Links + Cart + Notification ===== */}
      <div className="header-center">
        <h2 onClick={() => navigate('/')}>Home</h2>
        <h2 onClick={() => navigate('/hot')}>Hot</h2>
        <h2 onClick={() => navigate('/wishlist')}>Wishlist</h2>

        <div className="cart-icon" onClick={() => navigate('/cart')}>
          <ShoppingCart size={28} />
          <span className="cart-count">{getcartlength()}</span>
          <span className="cart-text">Cart</span>
        </div>
      </div>

      {/* ===== Right: Auth Links ===== */}
      <div className="header-right">
        <div className="avatar-container" onClick={() => setShowavatar(!showavatar)}>
          <img
            src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
            alt="User Avatar"
            className="avatar"
          />

          {showavatar && (
            <div className="dropdown">
              {localStorage.getItem("Token") ? (
                <>
                  <h2>{localStorage.getItem("mail")}</h2>
                  <h2 onClick={() => logout(count, setCount, navigate)}>Logout</h2>
                </>
              ) : (
                <>
                  <h2 onClick={() => navigate("/signup")}>Signup</h2>
                  <h2 onClick={() => navigate("/login")}>Login</h2>
                </>
              )}
            </div>
          )}
        </div>
      </div>



    </div>



  )
}
