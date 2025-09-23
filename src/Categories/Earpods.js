import React, { useContext, useEffect } from 'react'
import '../Categories_styles/Earpods.css'
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
export const Earpods = () => {
  const {
    earpodsdata,
    setEarpodsdata,
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

  const fetchearpods = async () => {
    const response = await axios.get('/earpods')
    setEarpodsdata(response.data.message)
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
      fetchearpods()
    }
    catch (error) {
      console.log("error");
    }
  }, [count])
  return (
    <div className='earpods'>
      <button className="back-btn" onClick={() => { navigate('/') }}>Back</button>
      <h1 className='earpods-title'>Earpods</h1>
      <div className='earpods-grid'>
        {earpodsdata.length === 0 ? Loader() :
          earpodsdata.map((item, index) => {
            return (
              <div className='earpods-card' key={index}>

                {item.offer !== 0 && <div className='earpods-offer'>{item.offer}% OFF</div>}

                <div className='earpods-heart'>
                  <input type="checkbox" id={`heart-earpods-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => { Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-earpods-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='earpods-image' />

                <div className='earpods-info'>
                  <div className='earpods-name'>{item.title}</div>
                  <div className='earpods-desc'>{item.description}</div>
                  <div className='earpods-date'>{timeAgo(item.createdAt)}</div>
                  <div className='earpods-prices'>
                    {item.defaultprice !== 0 && <div className='earpods-old-price'>{item.defaultprice}rs</div>}
                    <div className='earpods-price'>{item.price}rs</div>
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
