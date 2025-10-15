import React, { useContext, useEffect } from 'react'
import '../Search/Search.css'
import { Mycontext } from '../App'
import { data } from 'react-router-dom'
import { getlocalstorage } from '../Functions/Getlocalstorage'
import { disable } from '../Functions/Disableaddtocart'
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { handleClose } from '../Functions/Handleclose'
import { Wishlistchange } from '../Functions/Wishlistchange'
export const Search = () => {
    const { wishlistcheckedobject,
        setWishlistcheckedobject,
        addtocartobject,
        setAddtocartobject,
        cartquantity,
        setCartquantity,
        count,
        setCount,
        searchdata,
        setSearchdata,
        open,
        setOpen
    } = useContext(Mycontext)

    useEffect(() => {
        getlocalstorage(setWishlistcheckedobject, setAddtocartobject, setCartquantity)
    }, [])

    return (
        <div className="search-page">
            <h1>Search Results</h1>

            {searchdata.length > 0 ? (
                <div className="search-grid">
                    {searchdata.map((data, index) => (
                        <div className="search-card" key={index}>
                            {data.offer !== 0 && <div className='search-offer'>{data.offer}% OFF</div>}
                            <div className='search-heart'>
                                <input type="checkbox" id={`search-charger-${index}`} checked={data.title in wishlistcheckedobject}
                                    onChange={() => { Wishlistchange(data, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) }} />
                                <label htmlFor={`search-charger-${index}`}>&hearts;</label>
                            </div>
                            <div className="image-container">
                                <img src={data.image} alt={data.title} className="search-img" />
                            </div>

                            <div className="search-info">
                                <h2 className="search-title">{data.title}</h2>
                                <p className="search-desc">{data.description}</p>

                                <div className="price-box">
                                    {data.offer > 0 && (
                                        <span className="old-price">₹{data.defaultprice}</span>
                                    )}
                                    <span className="new-price">₹{data.price}</span>
                                </div>

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
