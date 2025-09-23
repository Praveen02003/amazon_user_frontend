export const getcartlength = () => {
    const usermaildata = localStorage.getItem("loginuserdataemail") || ""
    //console.log("===>", usermaildata);
    const cartitems = JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermaildata}cartitems`)) || {}
    //console.log("=====>",Object.keys(cartitems).length);
    return (Object.keys(cartitems).length)
}