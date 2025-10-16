import React, { useContext, useEffect } from 'react'
import '../Filter/Filter.css'
import { Mycontext } from '../App'
import { getlocalstorage } from '../Functions/Getlocalstorage'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { Wishlistchange } from '../Functions/Wishlistchange';
import { disable } from '../Functions/Disableaddtocart';
import { handleClose } from '../Functions/Handleclose';
export const Filter = () => {
    const {
        wishlistcheckedobject,
        setWishlistcheckedobject,
        addtocartobject,
        setAddtocartobject,
        cartquantity,
        setCartquantity,
        count,
        setCount,
        open,
        setOpen,
        filterdata,
        setFilterdata
    } = useContext(Mycontext)

    useEffect(() => {
        getlocalstorage(setWishlistcheckedobject, setAddtocartobject, setCartquantity)
    }, [])

    return (
        <div className="filter-page">
            <h1>Filter Results</h1>

            {filterdata.length > 0 ? (
                <div className="filter-grid">
                    {filterdata.map((data, index) => (
                        <div className="filter-card" key={index}>

                            {/* Offer Badge */}
                            {data.offer !== 0 && <div className='filter-offer'>{data.offer}% OFF</div>}

                            {/* Wishlist Heart */}
                            <div className='filter-heart'>
                                <input
                                    type="checkbox"
                                    id={`filter-heart-${index}`}
                                    checked={data.title in wishlistcheckedobject}
                                    onChange={() => Wishlistchange(data, count, setCount, wishlistcheckedobject, setWishlistcheckedobject)}
                                />
                                <label htmlFor={`filter-heart-${index}`}>&hearts;</label>
                            </div>

                            {/* Image */}
                            <div className="filter-image-container">
                                <img src={data.image} alt={data.title} className="filter-img" />
                            </div>

                            {/* Info */}
                            <div className="filter-info">
                                <h2 className="filter-title">{data.title}</h2>
                                <p className="filter-desc">{data.description}</p>

                                <div className="filter-price-box">
                                    {data.offer > 0 && <span className="filter-old-price">₹{data.defaultprice}</span>}
                                    <span className="filter-new-price">₹{data.price}</span>
                                </div>

                                {/* Add to cart button / disable logic */}
                                {disable(data, addtocartobject, setAddtocartobject, cartquantity, setCartquantity, setOpen)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="no-results">No products found.</p>
            )}

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
