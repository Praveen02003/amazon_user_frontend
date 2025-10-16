import React, { useContext, useEffect } from 'react'
import '../Header/Header.css'
import { useNavigate } from 'react-router-dom';
import amazonimage from '../assets/amazon.png'
import { logout } from '../Functions/Logoutdata';
import { Mycontext } from '../App'
import { getcartlength } from '../Functions/Getcartlength';
import { ShoppingCart } from "lucide-react";
import axios from '../Axios/Axios.js';
import { getsearchdata } from '../Functions/Getsearchdata.js';
import { getfilterdata } from '../Functions/Getfilterdata.js';
export const Header = () => {
  const {
    count,
    setCount,
    showavatar,
    setShowavatar,
    search,
    setSearch,
    setSearchdata,
    filter,
    setFilter,
    filterdata,
    setFilterdata
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
        <h1>Smartcart.in</h1>
      </div>

      {/* ===== Center: Nav Links + Search Bar + Filter + Cart ===== */}
      <div className="header-center">
        <h2 onClick={() => navigate('/')}>Home</h2>
        <h2 onClick={() => navigate('/hot')}>Hot</h2>
        <h2 onClick={() => navigate('/wishlist')}>Wishlist</h2>

        {/* --- Search Bar --- */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(event) => { setSearch(event.target.value) }}
          />
          <button onClick={() => { getsearchdata(search, setSearchdata, navigate) }}>Search</button>
        </div>

        {/* --- Filter Dropdown --- */}
        <div className="filter-bar">
          <select
            onChange={(e) => {
              navigate(`/${e.target.value}`);
            }}
          >
            <option value="">Select - Filter</option>
            <option value="laptops">laptops</option>
            <option value="mobiles">mobiles</option>
            <option value="earpods">earpods</option>
            <option value="tvs">tvs</option>
            <option value="hometheatres">hometheatres</option>
            <option value="Keyboards">Keyboards</option>
            <option value="mouses">mouses</option>
            <option value="chargers">chargers</option>
          </select>
        </div>

        <div className="price-filter-bar">
          <select
            onChange={(event) => {
              getfilterdata(event.target.value, filter, setFilter, setFilterdata, navigate)
            }}
          >
            <option value="">Filter by Price</option>
            <option value="0-5000">Below ₹5000</option>
            <option value="5000-10000">₹5000 - ₹10000</option>
            <option value="10000-20000">₹10000 - ₹20000</option>
            <option value="20000-50000">₹20000 - ₹50000</option>
            <option value="50000-100000">₹50000 - ₹100000</option>
            <option value="100000-9999999">Above ₹100000</option>
          </select>
        </div>

        {/* --- Cart Icon --- */}
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
