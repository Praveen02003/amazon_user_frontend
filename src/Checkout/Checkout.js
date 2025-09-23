import React, { useContext, useEffect } from 'react'
import '../Checkout/Checkout.css'
import { useNavigate } from 'react-router-dom'
import { Mycontext } from '../App'
import axios from '../Axios/Axios.js'
import { fetchPriceList } from '../Functions/Fetchpricelist.js'
import { fetchtotalprice } from '../Functions/Fetcarttotal.js'
import { finalcheckout } from '../Functions/Finalcheckout.js'

export const Checkout = () => {
  const {
    totalprice,
    setTotalprice,
    cartpricedatas,
    setCartpricedatas
  } = useContext(Mycontext)

  const navigate = useNavigate()

  // fetch cart prices
  useEffect(() => {
    fetchPriceList(navigate,setCartpricedatas)
  }, [navigate, setCartpricedatas])

  // calculate total whenever cartpricedatas changes
  useEffect(() => {
    fetchtotalprice(cartpricedatas,setTotalprice)
  }, [cartpricedatas, setTotalprice])

  return (
    <div className="checkout">
      <button className="back-btn" onClick={() => navigate('/cart')}>
        Back
      </button>
      <h1 className="checkout-title">Checkout</h1>

      <table className="checkout-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartpricedatas.map((item, index) => {
            var usermailinput=""
            var usermailfinal=""
            usermailinput=localStorage.getItem("loginuserdataemail")
            //console.log("--->",usermailinput);
            if (usermailinput != null )
            {
              usermailfinal=localStorage.getItem("loginuserdataemail")
            }
            const cartitemsquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
            return (
              <tr key={index}>
                <td>
                  <img src={item.image} alt={item.title} />
                </td>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td>{cartitemsquantity[item.title]}</td>
                <td>₹{(cartitemsquantity[item.title] || 0) * item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <h2 className="checkout-total">Total : ₹{totalprice}</h2>
      <button className="checkout-btn" onClick={() => finalcheckout(navigate)}>
        Final Checkout
      </button>
    </div>
  )
}
