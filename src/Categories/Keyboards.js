import React, { useContext, useEffect } from 'react'
import '../Categories_styles/Keyboards.css'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { timeAgo } from '../Functions/Timesago'
import { Wishlistchange } from '../Functions/Wishlistchange'
import { addtocart } from '../Functions/Addtocart'
import { disable } from '../Functions/Disableaddtocart'
import { Loader } from '../Loader/Loader.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose.js'
import { getlocalstorage } from '../Functions/Getlocalstorage.js'
export const Keyboards = () => {
  const {
    keyboarddata,
    setKeyboarddata,
    wishlistcheckedobject,
    setWishlistcheckedobject,
    count,
    setCount,
    addtocartobject,
    setAddtocartobject,
    cartquantity,
    setCartquantity,
    open,
    setOpen
  } = useContext(Mycontext)

  const fetchkeyboards = async () => {
    const response = await axios.get('/keyboards')
    setKeyboarddata(response.data.message)
  }

  const navigate = useNavigate()


  useEffect(() => {
    try {
      getlocalstorage(setWishlistcheckedobject, setAddtocartobject, setCartquantity)
      fetchkeyboards()
    }
    catch (error) {
      console.log("error");
    }
  }, [count])
  return (
    <div className='keyboard'>
      <h1 className='keyboard-title'>Keyboards</h1>
      <div className='keyboard-grid'>
        {keyboarddata.length === 0 ? Loader() :
          keyboarddata.map((item, index) => {
            return (
              <div className='keyboard-card' key={index}>

                {item.offer !== 0 && <div className='keyboard-offer'>{item.offer}% OFF</div>}

                <div className='keyboard-heart'>
                  <input type="checkbox" id={`heart-keyboard-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => { Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-keyboard-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='keyboard-image' />

                <div className='keyboard-info'>
                  <div className='keyboard-name'>{item.title}</div>
                  <div className='keyboard-desc'>{item.description}</div>
                  <div className='keyboard-date'>{timeAgo(item.createdAt)}</div>
                  <div className='keyboard-prices'>
                    {item.defaultprice !== 0 && <div className='keyboard-old-price'>{item.defaultprice}rs</div>}
                    <div className='keyboard-price'>{item.price}rs</div>
                  </div>
                  {/* <button className='buy-btn' onClick={() => { navigate('/abcd') }}>Buy Now</button> */}
                  {disable(item, addtocartobject, setAddtocartobject, cartquantity, setCartquantity,setOpen)}
                </div>

              </div>
            )
          })
        }
      </div>
      <Snackbar
        open={open}
        autoHideDuration={500}
        onClose={() => handleClose(setOpen)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="success" onClose={() => handleClose(setOpen)}>
          Added to cart
        </Alert>
      </Snackbar>
    </div>

  )
}
