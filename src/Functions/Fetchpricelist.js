import axios from '../Axios/Axios.js'
export const fetchPriceList = async (navigate,setCartpricedatas) => {
    const token = localStorage.getItem("Token")
    if (!token) {
        navigate("/login")
        return
    }
    var usermailinput = ""
    var usermailfinal = ""
    usermailinput = localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null) {
        usermailfinal = localStorage.getItem("loginuserdataemail")
    }
    const cartdetails = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) || {};
    const ids = Object.values(cartdetails)

    try {
        const response = await axios.post("/getpricedata",{ ids })
        setCartpricedatas(response.data.message)
        //console.log(response.data.message);
        

    } catch (error) {
        console.error(error)
    }
}
