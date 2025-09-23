import React, { useContext, useEffect } from 'react'
import '../Login/Login.css'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { login } from '../Functions/Logindata.js'
import { useNavigate } from 'react-router-dom'
import { remember } from '../Functions/Remember.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose.js'
import { getloginuserdetails } from '../Functions/Getlloginuserdetails.js'
export const Login = () => {
  const {
    loginemail,
    setLoginemail,
    loginpassword,
    setLoginpassord,
    count,
    setCount,
    open,
    setOpen,
    loginerror,
    setLoginerror,
    severity,
    setSeverity
  } = useContext(Mycontext)

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("Token"))
    {
      navigate('/')  
    }
  }, [count])

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="title">Welcome back</h1>
        <p className="subtitle">Please enter your details to sign in</p>

        {/* Social login buttons */}
        <div className="social-login">
          <button className="social-btn google">G</button>
          <button className="social-btn apple"></button>
          <button className="social-btn x">X</button>
        </div>

        <div className="divider">
          <span>or</span>
        </div>

        <div className="form-group">
          Email :
          <input
            type="email"
            value={localStorage.getItem("loginemail")}
            onChange={(event) => {
              setLoginemail(event.target.value);
            }}
            placeholder="Enter your email"
          />
          <br />
          Password :
          <input
            type="password"
            onChange={(event) => {
              setLoginpassord(event.target.value);
            }}
            placeholder="Enter your password"
          />
          <br />
        </div>

        <div className="options">
          <label>
            <input
              type="checkbox"
              onChange={() => {
                remember(loginemail, count, setCount);
              }}
              checked={localStorage.getItem("loginemail")}
            />{" "}
            Remember me
          </label>
          <button onClick={() => navigate("/forgetpassword")} className="link-btn">
            Forgot Password?
          </button>
        </div>

        <button
          className="login-btn"
          onClick={() => {
            login(loginemail, loginpassword, navigate,setLoginerror,setSeverity,setOpen,count,setCount);
          }}
        >
          Sign in
        </button>

        <p className="signup-text">
          Don't have an account?{" "}
          <span className="link-btn" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={500}
        onClose={() => handleClose(setOpen)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={severity} onClose={() => handleClose(setOpen)}>
          {loginerror}
        </Alert>
      </Snackbar>
    </div>


  )
}
