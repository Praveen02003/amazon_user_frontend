import React, { useContext, useEffect } from 'react'
import '../Categories_styles/Mouse.css'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { timeAgo } from '../Functions/Timesago'
import { Wishlistchange } from '../Functions/Wishlistchange'
import { addtocart } from '../Functions/Addtocart'
import { disable } from '../Functions/Disableaddtocart'
import { loader } from '../Loader/Loader.js'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose.js'
import { getlocalstorage } from '../Functions/Getlocalstorage.js'
export const Mouse = () => {
  const {
    mousedata,
    setMousedata,
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

  const fetchmouses = async () => {
    const response = await axios.get('/mouses')
    setMousedata(response.data.message)
  }

  const navigate = useNavigate()


  useEffect(() => {
    try {
      getlocalstorage(setWishlistcheckedobject, setAddtocartobject, setCartquantity)
      fetchmouses()
    }
    catch (error) {
      console.log("error");
    }
  }, [count])
  return (
    <div className='mouse'>
      <h1 className='mouse-title'>Mouse</h1>
      <div className='mouse-grid'>
        {mousedata.length === 0 ? loader() :
          mousedata.map((item, index) => {
            return (
              <div className='mouse-card' key={index}>

                {item.offer !== 0 && <div className='mouse-offer'>{item.offer}% OFF</div>}

                <div className='mouse-heart'>
                  <input type="checkbox" id={`heart-mouse-${index}`} checked={item.title in wishlistcheckedobject}
                    onChange={() => { Wishlistchange(item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                  <label htmlFor={`heart-mouse-${index}`}>&hearts;</label>
                </div>

                <img src={item.image} alt={item.title} className='mouse-image' />

                <div className='mouse-info'>
                  <div className='mouse-name'>{item.title}</div>
                  <div className='mouse-desc'>{item.description}</div>
                  <div className='mouse-date'>{timeAgo(item.createdAt)}</div>
                  <div className='mouse-prices'>
                    {item.defaultprice !== 0 && <div className='mouse-old-price'>{item.defaultprice}rs</div>}
                    <div className='mouse-price'>{item.price}rs</div>
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
