export const quantity=(operation,item,value,count,setCount)=>{
  var usermailinput=""
  var usermailfinal=""
  usermailinput=localStorage.getItem("loginuserdataemail")
  //console.log("--->",usermailinput);
  if (usermailinput != null )
  {
      usermailfinal=localStorage.getItem("loginuserdataemail")
  }
  const cart=JSON.parse(localStorage.getItem("cartquantity")) || JSON.parse(localStorage.getItem(`${usermailfinal}cartquantity`)) ||{};
  if (operation === "inc")
  {
    //console.log(cart);
    cart[item]=(cart[item])+1
    const itemscount=JSON.parse(localStorage.getItem("cartquantity"))
    if (itemscount === null)
    {
        localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cart))
    }
    else
    {
        localStorage.setItem("cartquantity",JSON.stringify(cart))
    }
    
    
    //localStorage.setItem("cartquantity1",JSON.stringify(cart))
    setCount(count+1)
    
  } 
  else if (operation === "dec")
  {
    //console.log(cart);
    if (cart[item] <= 1)
    {
      cart[item]=1
      const itemscount1=JSON.parse(localStorage.getItem("cartquantity"))
      if (itemscount1 === null)
      {
          localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cart))
      }
      else
      {
          localStorage.setItem("cartquantity",JSON.stringify(cart))
      }
      
      
      //localStorage.setItem("cartquantity1",JSON.stringify(cart))
      setCount(count+1)
    }
    else
    {
      cart[item]=(cart[item])-1
      const itemscount2=JSON.parse(localStorage.getItem("cartquantity"))
      if (itemscount2 === null)
      {
          localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cart))
      }
      else
      {
          localStorage.setItem("cartquantity",JSON.stringify(cart))
      }
      //localStorage.setItem("cartquantity1",JSON.stringify(cart))
      setCount(count+1)
    }
    
    
  }
  else if (operation === "inp")
  {
    //console.log(cart);
    if (value <= 1)
    {
      cart[item]=1
      const itemscount3=JSON.parse(localStorage.getItem("cartquantity"))
      if (itemscount3 === null)
      {
          localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cart))
      }
      else
      {
          localStorage.setItem("cartquantity",JSON.stringify(cart))
      }
      //localStorage.setItem("cartquantity1",JSON.stringify(cart))
      setCount(count+1)
    }
    else
    {
      cart[item]=value
      const itemscount4=JSON.parse(localStorage.getItem("cartquantity"))
      if (itemscount4 === null)
      {
          localStorage.setItem(`${usermailfinal}cartquantity`,JSON.stringify(cart))
      }
      else
      {
          localStorage.setItem("cartquantity",JSON.stringify(cart))
      }
      //localStorage.setItem("cartquantity1",JSON.stringify(cart))
      setCount(count+1)
    }
    
  }
  }