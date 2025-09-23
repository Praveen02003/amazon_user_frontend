import axios from '../Axios/Axios.js'
import { logout } from './Logoutdata.js'
export const getcart = async (setCartdatas) => {
    var usermailinput=""
    var usermailfinal=""
    usermailinput=localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null )
    {
        usermailfinal=localStorage.getItem("loginuserdataemail")
    }
    const cartdata = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) ||{};
    //console.log(cartdata);
    const id = Object.values(cartdata)
    //console.log("====>",id);
    const userdata = {
        ids: id
    }
    try {
        const response = await axios.post("/getcart", userdata)
        setCartdatas(response.data.message)
        //console.log(response.data.loginuser);
        //console.log("======>",response.data.message);
    }
    catch (error) {
        console.log(error);

    }

} 