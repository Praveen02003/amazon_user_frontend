import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import '../Wishlist/Wishlist.css'
import { timeAgo } from '../Functions/Timesago'
import { Wishlistchange } from '../Functions/Wishlistchange'
import { addtocart } from '../Functions/Addtocart'
import { useNavigate } from 'react-router-dom'
import { disable } from '../Functions/Disableaddtocart'
import { getwishlistdata } from '../Functions/GetWishlist.js'
import { Loader, loader } from '../Loader/Loader.js'
import { handleClose } from '../Functions/Handleclose.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
export const Wishlist = () => {
  const {
    wishlistProducts,
    setWishlistProducts,
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
    const wishlistitems = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermailfinal}wishlist`)) ||{};
    //console.log(wishlistitems);
    setWishlistcheckedobject(wishlistitems);
    const ids = Object.values(wishlistitems)
    //console.log(ids);
    const cartdetails = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) ||{};
    setAddtocartobject(cartdetails)
    const cartitemsquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
    setCartquantity(cartitemsquantity)

    getwishlistdata(ids, wishlistProducts, setWishlistProducts)

  }, [count])
  return (
    <div className='wishlist'>
      <h1 className='wishlist-title'>Wishlist</h1>
      <div className='wishlist-grid'>
        {wishlistProducts.length === 0 ? (
          <div>
            <p>No wishlist Items</p>
          </div>
        ) : (
          wishlistProducts.map((item, index) => {
            return (
              <div className='wishlist-card' key={index}>

                {item.offer !== 0 && <div className='wishlist-offer'>{item.offer}% OFF</div>}

                <div className='wishlist-heart'>
                  <input type="checkbox" id={`heart-wishlist-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => {Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-wishlist-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='wishlist-image' />

                <div className='wishlist-info'>
                  <div className='wishlist-name'>{item.title}</div>
                  <div className='wishlist-desc'>{item.description}</div>
                  <div className='wishlist-date'>{timeAgo(item.createdAt)}</div>
                  <div className='wishlist-prices'>
                    {item.defaultprice !== 0 && <div className='wishlist-old-price'>{item.defaultprice}rs</div>}
                    <div className='wishlist-price'>{item.price}rs</div>
                  </div>
                  <button className='buy-btn' onClick={() => { navigate('/notfound') }}>Buy Now</button>
                  {disable(item, addtocartobject, setAddtocartobject, cartquantity, setCartquantity,setOpen)}
                </div>

              </div>
            )
          })
        )}
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
