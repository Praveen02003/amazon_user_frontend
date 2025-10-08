import React, { useContext, useEffect } from 'react'
import '../Categories_styles/Mobiles.css'
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
export const Mobiles = () => {
  const {
    mobiledata,
    setMobiledata,
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


  const fetchmobile = async () => {
    const response = await axios.get('/mobiles')
    setMobiledata(response.data.message)
  }

  const navigate = useNavigate()

  useEffect(() => {
    var usermailinput=""
    var usermailfinal=""
    usermailinput=localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null )
    {
        usermailfinal=localStorage.getItem("loginuserdataemail")
    }
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermailfinal}wishlist`)) ||{};
    setWishlistcheckedobject(storedWishlist);
    //console.log(storedWishlist);
    const cartdetails = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) ||{};
    setAddtocartobject(cartdetails)
    const cartitemsquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
    setCartquantity(cartitemsquantity)
    try {
      fetchmobile()
    }
    catch (error) {
      console.log(error);
    }
  }, [count])

  return (
    <div className='mobile'>
      <button className="back-btn" onClick={() => { navigate('/') }}>Back</button>
      <h1 className='mobile-title'>Mobiles</h1>
      <div className='mobile-grid'>
        {mobiledata.length === 0 ? Loader() :
          mobiledata.map((item, index) => {
            return (
              <div className='mobile-card' key={index}>

                {item.offer !== 0 && <div className='mobile-offer'>{item.offer}% OFF</div>}

                <div className='mobile-heart'>
                  <input type="checkbox" id={`heart-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => { Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='mobile-image' />

                <div className='mobile-info'>
                  <div className='mobile-name'>{item.title}</div>
                  <div className='mobile-desc'>{item.description}</div>
                  <div className='mobile-date'>{timeAgo(item.createdAt)}</div>
                  <div className='mobile-prices'>
                    {item.defaultprice !== 0 && <div className='mobile-old-price'>{item.defaultprice}rs</div>}
                    <div className='mobile-price'>{item.price}rs</div>
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
