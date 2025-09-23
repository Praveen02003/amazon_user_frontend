import axios from '../Axios/Axios.js';
import { logout } from './Logoutdata.js';
export const getloginuserdetails = async(count,setCount,navigate) => {
    var token = ""
    token = localStorage.getItem("Token")
    //console.log("=====>",token);
    if (token != null) {
        token = localStorage.getItem("Token")
        //console.log("=====>",token);
        try {
            //console.log("=====>", token);
            const response = await axios.post('/getuser', {}, { headers: { Authorization: `Bearer ${token}` } })
            //console.log(response.data.message);

            if (response.data.message === "jwt expired") {
                logout(count, setCount, navigate)
            }
            if (response.data.message != "jwt expired") {
                localStorage.setItem("loginuserdata", JSON.stringify(response.data.message))
                localStorage.setItem("loginuserdataemail", response.data.message.email)
                var usermail = localStorage.getItem("loginuserdataemail") || ""
                if (usermail != null) {

                    var cartitems = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermail}cartitems`)) || {}
                    var cartquantity = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermail}cartquantity`)) || {}
                    var wishlist = JSON.parse(localStorage.getItem("wishlist")) || JSON.parse(localStorage.getItem(`${usermail}wishlist`)) || {}
                    localStorage.setItem(`${usermail}cartitems`, JSON.stringify(cartitems))
                    localStorage.setItem(`${usermail}cartquantity`, JSON.stringify(cartquantity))
                    localStorage.setItem(`${usermail}wishlist`, JSON.stringify(wishlist))
                    //console.log(JSON.parse(localStorage.getItem(`${usermail}wishlist`)));
                    localStorage.removeItem("cartitems")
                    localStorage.removeItem("cartquantity")
                    localStorage.removeItem("wishlist")
                    localStorage.removeItem("carttotal")
                    // localStorage.removeItem("cartitems1")
                    // localStorage.removeItem("cartquantity1")
                    // localStorage.removeItem("wishlist1")
                    // localStorage.removeItem("carttotal1")
                    //setCount(count + 1)

                }
            }
        }
        catch (error) {
            console.log("error");

        }
    }

}