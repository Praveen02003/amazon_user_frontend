export const Wishlistchange = (item, count, setCount, wishlistcheckedobject, setWishlistcheckedobject) => {
  var usermailinput = ""
  var usermailfinal = ""
  usermailinput = localStorage.getItem("loginuserdataemail")
  //console.log("--->",usermailinput);
  if (usermailinput != null) {
    usermailfinal = localStorage.getItem("loginuserdataemail")
    //console.log(usermailfinal);

  }
  const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermailfinal}wishlist`)) || {};
  if (item.title in storedWishlist) {
    delete wishlistcheckedobject[item.title];
    setWishlistcheckedobject(wishlistcheckedobject)
    const wishlist1 = JSON.parse(localStorage.getItem("wishlist"))
    if (wishlist1 === null) {
      localStorage.setItem(`${usermailfinal}wishlist`, JSON.stringify(wishlistcheckedobject))
    }
    else {
      localStorage.setItem("wishlist", JSON.stringify(wishlistcheckedobject))
    }


    //localStorage.setItem("wishlist1",JSON.stringify(wishlistcheckedobject))
    setCount(count + 1)
  }
  else {
    //console.log(wishlistcheckedobject);
    const wishlistobject = { ...wishlistcheckedobject, [item.title]: item._id }
    //console.log(wishlistobject);
    setWishlistcheckedobject(wishlistobject)
    const wishlist2 = JSON.parse(localStorage.getItem("wishlist"))
    if (wishlist2 === null) {
      localStorage.setItem(`${usermailfinal}wishlist`, JSON.stringify(wishlistobject))
    }
    else {
      localStorage.setItem("wishlist", JSON.stringify(wishlistobject))
    }
    //localStorage.setItem("wishlist1",JSON.stringify(wishlistobject))
    setCount(count + 1)
  }
}