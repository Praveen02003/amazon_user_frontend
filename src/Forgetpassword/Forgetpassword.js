import React, { useContext } from 'react'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { useNavigate } from 'react-router-dom'
import { update } from '../Functions/Updatepassworddata.js'
import '../Forgetpassword/Forgetpassword.css'
export const Forgetpassword = () => {
  const {
    loginemail,
    setLoginemail,
    updateemail,
    setUpdateemail,
    updatepassword,
    setUpdatepassword,
    updateconfirmpassword,
    setUpdateconfirmpassword
  } = useContext(Mycontext)

  const navigate = useNavigate()

  return (
    <div className="forget-container">
      <div className="forget-card">
        <h1 className="title">Forgot Password</h1>

        <div className="form-group">
          <label>Email : </label>
          <input
            type="email"
            value={loginemail}
            onChange={(event) => { setLoginemail(event.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>New Password : </label>
          <input
            type="password"
            onChange={(event) => { setUpdatepassword(event.target.value) }}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password : </label>
          <input
            type="password"
            onChange={(event) => { setUpdateconfirmpassword(event.target.value) }}
          />
        </div>

        <button
          className="update-btn"
          onClick={() => { update(loginemail, updateconfirmpassword, updatepassword, navigate) }}
        >
          Update
        </button>
      </div>
    </div>

  )
}
