import React, { useContext, useEffect } from 'react'
import '../Categories_styles/Laptops.css'
import { useNavigate } from 'react-router-dom'
import axios from '../Axios/Axios.js'
import { Mycontext } from '../App'
import { timeAgo } from '../Functions/Timesago'
import { Wishlistchange } from '../Functions/Wishlistchange'
import { addtocart } from '../Functions/Addtocart'
import { disable } from '../Functions/Disableaddtocart'
import { loader } from '../Loader/Loader.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose.js'
import { getlocalstorage } from '../Functions/Getlocalstorage.js'
export const Laptops = () => {
  const {
    laptopdata,
    setLaptopdata,
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

  const fetchlaptop = async () => {
    const response = await axios.get('/laptops')
    setLaptopdata(response.data.message)
  }

  useEffect(() => {
    try {
      getlocalstorage(setWishlistcheckedobject, setAddtocartobject, setCartquantity)
      fetchlaptop()
    }
    catch (error) {
      console.log("error");
    }
  }, [count])
  return (
    <div className="laptop">
      
      <h1 className="laptop-title">Laptops</h1>

      <div className="laptop-grid">
        {laptopdata.length === 0 ? (
          loader()
        ) : (
          laptopdata.map((item, index) => (
            <div className="laptop-card" key={index}>
              {item.offer !== 0 && <span className="laptop-offer">{item.offer}% OFF</span>}

              {/* Heart Wishlist */}
              <div
                className={`wishlist-heart ${item.title in wishlistcheckedobject ? "active" : ""}`}
                onClick={() =>
                  Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject)
                }
              >
                &#10084;
              </div>

              <img src={item.image} alt={item.title} className="laptop-image" />
              <div className="laptop-info">
                <h2 className="laptop-name">{item.title}</h2>
                <p className="laptop-desc">{item.description}</p>
                {/* <p className="laptop-date">{timeAgo(item.createdAt)}</p> */}
                <div className="laptop-prices">
                  {item.defaultprice !== 0 && <span className="laptop-old-price">{item.defaultprice} rs</span>}
                  <span className="laptop-price">{item.price} rs</span>
                </div>
              </div>
              {/* <button className="buy-btn" onClick={() => navigate('/abcd')}>
                Buy Now
              </button> */}
              {disable(item, addtocartobject, setAddtocartobject, cartquantity, setCartquantity,setOpen)}
            </div>
          ))
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
