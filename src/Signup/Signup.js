import React, { useContext, useEffect } from 'react'
import '../Signup/Signup.css'
import { Mycontext } from '../App'
import axios from '../Axios/Axios'
import { signup } from '../Functions/Signupdata'
import { useNavigate } from 'react-router-dom'
import Snackbar from "@mui/material/Snackbar";
import { handleClose } from '../Functions/Handleclose'
import Alert from "@mui/material/Alert";
export const Signup = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmpassword,
    setConfirmpassword,
    open,
    setOpen,
    signuperror,
    setSignuperror,
    severity,
    setSeverity
  } = useContext(Mycontext)

  const navigate=useNavigate()

  useEffect(()=>{
    if (localStorage.getItem("Token"))
    {
      navigate('/')  
    }
  },[])

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">Please fill in the details to sign up</p>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Enter your password"
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            onChange={(event) => {
              setConfirmpassword(event.target.value);
            }}
            placeholder="Confirm your password"
          />
        </div>

        <button
          className="signup-btn"
          onClick={() => {
            signup(name, email, password, confirmpassword,setOpen,signuperror,setSignuperror,setSeverity);
          }}
        >
          Sign up
        </button>

        <p className="login-text">
          Already have an account?{" "}
          <span className="link-btn" onClick={() => navigate("/login")}>
            Log in
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
          {signuperror}
        </Alert>
      </Snackbar>
    </div>


  )
}
