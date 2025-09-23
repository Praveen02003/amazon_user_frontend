import { handleopen } from "./Handleopen"

export const addtocart=(item,addtocartobject,setAddtocartobject,cartquantity,setCartquantity,setOpen)=>{
    var usermailinput=""
    var usermailfinal=""
    usermailinput=localStorage.getItem("loginuserdataemail")
    //console.log("--->",usermailinput);
    if (usermailinput != null )
    {
        usermailfinal=localStorage.getItem("loginuserdataemail")
        //console.log(usermailfinal);
        
    }
    const cartitems={...addtocartobject,[item.title]:item._id}
    const cartitemsquantity={...cartquantity,[item.title]:1}
    setAddtocartobject(cartitems)
    setCartquantity(cartitemsquantity)
    handleopen(setOpen)
    const cartdata=JSON.parse(localStorage.getItem("cartitems"))
    const itemscount=JSON.parse(localStorage.getItem("cartquantity"))
    if ((cartdata === null) && (itemscount === null))
    {
        localStorage.setItem(`${usermailfinal}cartitems`,JSON.stringify(cartitems))
        localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cartitemsquantity)) 
    }
    else
    {
        localStorage.setItem("cartitems",JSON.stringify(cartitems))
        localStorage.setItem("cartquantity",JSON.stringify(cartitemsquantity))
    }
    
    
    //localStorage.setItem("cartitems1",JSON.stringify(cartitems))
    //localStorage.setItem("cartquantity1",JSON.stringify(cartitemsquantity))
}
    