import { handleopen } from "./Handleopen"

export const removefromcart=(item,count,setCount,setOpen)=>{
  var usermailinput=""
  var usermailfinal=""
  usermailinput=localStorage.getItem("loginuserdataemail")
  //console.log("--->",usermailinput);
  if (usermailinput != null )
  {
      usermailfinal=localStorage.getItem("loginuserdataemail")
  }
  var cartdetail=JSON.parse(localStorage.getItem("cartitems")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartitems`)) ||{};
  //console.log(cartdetail);
  var cartquantitydetail=JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
  if (item in cartdetail)
  {
    delete cartdetail[item]
    delete cartquantitydetail[item]
    handleopen(setOpen)
    //console.log(cartdetail);
    setCount(count+1)
    const cartdata=JSON.parse(localStorage.getItem("cartitems"))
    const itemscount=JSON.parse(localStorage.getItem("cartquantity"))
    if ((cartdata === null) && (itemscount === null))
    {
      localStorage.setItem(`${usermailfinal}cartitems`,JSON.stringify(cartdetail))
      localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cartquantitydetail))
    }
    else
    {
      localStorage.setItem("cartitems",JSON.stringify(cartdetail))
      localStorage.setItem("cartquantity",JSON.stringify(cartquantitydetail))
    }
    
    
    //localStorage.setItem("cartitems1",JSON.stringify(cartdetail))
    //localStorage.setItem("cartquantity1",JSON.stringify(cartquantitydetail))
  }
}