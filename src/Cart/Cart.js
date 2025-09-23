import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { removefromcart } from '../Functions/Removefromcart'
import { useNavigate } from 'react-router-dom'
import '../Cart/Cart.css'
import { quantity } from '../Functions/Quantity'
import axios from '../Axios/Axios.js'
import { getcart } from '../Functions/Getcart.js'
import { handleClose } from '../Functions/Handleclose.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export const Cart = () => {
  const {
    cartdatas,
    setCartdatas,
    count,
    setCount,
    open,
    setOpen
  } = useContext(Mycontext)

  const navigate = useNavigate()

  



  useEffect(() => {
    getcart(setCartdatas)
    
  }, [count])
  return (
    <div className="cart">
      <h1>Cart</h1>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartdatas.length === 0 ? <p>No items in the cart</p> :cartdatas.map((item, index) => {
            var usermailinput=""
            var usermailfinal=""
            usermailinput=localStorage.getItem("loginuserdataemail")
            //console.log("--->",usermailinput);
            if (usermailinput != null )
            {
                usermailfinal=localStorage.getItem("loginuserdataemail")
            }
            const cartquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
            return (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}rs</td>
                <td>
                  <button onClick={() => quantity("inc", item.title, null, count, setCount)}>+</button>
                  <input
                    type="number"
                    value={cartquantity[item.title]}
                    onChange={(event) =>
                      quantity("inp", item.title, event.target.value, count, setCount)
                    }
                  />
                  <button onClick={() => quantity("dec", item.title, null, count, setCount)}>-</button>
                </td>
                <td>
                  <button onClick={() => removefromcart(item.title, count, setCount,setOpen)}>
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button className="cartbutton" onClick={() => navigate("/checkout")}>
        Checkout
      </button>
     <Snackbar
        open={open}
        autoHideDuration={500}
        onClose={() => handleClose(setOpen)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity="success" onClose={() => handleClose(setOpen)}>
          Item Removed
        </Alert>
    </Snackbar>
    </div>


  )
}
