import axios from '../Axios/Axios.js'
import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { Wishlistchange } from '../Functions/Wishlistchange'
import { timeAgo } from '../Functions/Timesago'
import { addtocart } from '../Functions/Addtocart'
import { disable } from '../Functions/Disableaddtocart'
import { useNavigate } from 'react-router-dom'
import '../Hot/Hot.css'
import { Loader } from '../Loader/Loader.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose.js'

export const Hot = () => {
  const {
    offerProducts,
    setOfferProducts,
    wishlistcheckedobject,
    setWishlistcheckedobject,
    count,
    setCount,
    addtocartobject,
    setAddtocartobject,
    cartquantity,
    setCartquantity,
    usermail,
    setUsermail,
    open,
    setOpen
  } = useContext(Mycontext)

  const navigate = useNavigate()

  const getoffers = async () => {
    const response = await axios.get("/getoffers")
    //console.log(response.data.message);
    setOfferProducts(response.data.message)

  }
  useEffect(() => {
    var usermailinput=""
    var usermailfinal=""
    usermailinput=localStorage.getItem("loginuserdataemail") || ""
    //console.log("--->",usermailinput);
    if (usermailinput != null )
    {
        usermailfinal=localStorage.getItem("loginuserdataemail") || ""
    }
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermailfinal}wishlist`)) ||{};
    setWishlistcheckedobject(storedWishlist);
    //console.log(storedWishlist);
    const cartdetails = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) ||{};
    setAddtocartobject(cartdetails)
    const cartitemsquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
    setCartquantity(cartitemsquantity)
    try {
      getoffers()
    } catch (error) {
      console.log("error");
    }
  }, [count])
  return (
    <div className='hot'>
      <h1 className='hot-title'>Hot</h1>
      <div className='hot-grid'>
        {offerProducts.length === 0 ? Loader() :
          offerProducts.map((item, index) => {
            return (
              <div className='hot-card' key={index}>

                {item.offer !== 0 && <div className='hot-offer'>{item.offer}% OFF</div>}

                <div className='hot-heart'>
                  <input type="checkbox" id={`heart-hot-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => { Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-hot-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='hot-image' />

                <div className='hot-info'>
                  <div className='hot-name'>{item.title}</div>
                  <div className='hot-desc'>{item.description}</div>
                  <div className='hot-date'>{timeAgo(item.createdAt)}</div>
                  <div className='hot-prices'>
                    {item.defaultprice !== 0 && <div className='hot-old-price'>{item.defaultprice}rs</div>}
                    <div className='hot-price'>{item.price}rs</div>
                  </div>
                  <button className='buy-btn' onClick={() => { navigate('/notfound') }}>Buy Now</button>
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
