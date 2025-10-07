import axios from "../Axios/Axios.js"

export const finalcheckout=async(navigate)=>{
    navigate('/notfound')
    const usermailinput=localStorage.getItem("loginuserdataemail")
    const cartitems=JSON.parse(localStorage.getItem(`${usermailinput}cartitems`))
    const cartquantity=JSON.parse(localStorage.getItem(`${usermailinput}cartquantity`))
    const wishlist=JSON.parse(localStorage.getItem(`${usermailinput}wishlist`))
    const carttotal=localStorage.getItem(`${usermailinput}carttotal`)
    //console.log(typeof(cartitems));
    
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