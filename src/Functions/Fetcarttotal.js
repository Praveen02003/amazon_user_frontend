export const fetchtotalprice=(cartpricedatas,setTotalprice)=>{
    var usermailinput=""
    var usermailfinal=""
    usermailinput=localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null )
    {
        usermailfinal=localStorage.getItem("loginuserdataemail")
    }
    const cartquantityobject = JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};

    const total = cartpricedatas.reduce((sum, item) => {
      return sum + (item.price * (cartquantityobject[item.title] || 0))
    }, 0)

    setTotalprice(total)
    const usermail=localStorage.getItem("loginuserdataemail")
    //console.log(usermail);
    if (usermail != null)
    {
        localStorage.setItem(`${usermail}carttotal`, total)
    }
    if (total > 0)
    {
        localStorage.setItem("carttotal", total)
        //localStorage.setItem("carttotal1", total)    
    }
}