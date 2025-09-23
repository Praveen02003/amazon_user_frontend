import { addtocart } from "./Addtocart"

export const disable=(item,addtocartobject,setAddtocartobject,cartquantity,setCartquantity,setOpen)=>{
      if (item.title in addtocartobject)
      {
        return(<button onClick={()=>{addtocart(item,addtocartobject,setAddtocartobject,cartquantity,setCartquantity,setOpen)}} className="addtocart-disable-btn" disabled>Added</button>)
      }
      else
      {
        return(<button onClick={()=>{addtocart(item,addtocartobject,setAddtocartobject,cartquantity,setCartquantity,setOpen)}} className="addtocart-btn">Add to Cart</button>)
      }
    }