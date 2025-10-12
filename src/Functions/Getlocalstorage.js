export const getlocalstorage = (setWishlistcheckedobject, setAddtocartobject, setCartquantity) => {
    var usermailinput = ""
    var usermailfinal = ""
    usermailinput = localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null) {
        usermailfinal = localStorage.getItem("loginuserdataemail")
    }
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermailfinal}wishlist`)) || {};
    setWishlistcheckedobject(storedWishlist);
    //console.log(storedWishlist);
    const cartdetails = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) || {};
    setAddtocartobject(cartdetails)
    const cartitemsquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) || {};
    setCartquantity(cartitemsquantity)
}