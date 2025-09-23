import axios from "../Axios/Axios.js"

export const finalcheckout=async(navigate)=>{
    navigate('/notfound')
    const usermailinput=localStorage.getItem("loginuserdataemail")
    const cartitems=localStorage.getItem(`${usermailinput}cartitems`)
    const cartquantity=localStorage.getItem(`${usermailinput}cartquantity`)
    const wishlist=localStorage.getItem(`${usermailinput}wishlist`)
    const carttotal=localStorage.getItem(`${usermailinput}carttotal`)
    const userdata={
        email:usermailinput,
        cartitems:cartitems,
        cartquantity:cartquantity,
        wishlist:wishlist,
        total:carttotal
    }
    try {
        const response=await axios.post('/confirmation',userdata)
        //console.log(response.data.message);
    } catch (error) {
        console.log("error");
        
    }
}