import axios from '../Axios/Axios.js'
export const getwishlistdata=async(ids,wishlistProducts,setWishlistProducts)=>{
    const userdata={
      _id:ids
    }
    try
    {
      const response=await axios.post("/getwishlist",userdata)
      //console.log(response.data.message);
      
      setWishlistProducts(response.data.message)
      //console.log(wishlistProducts); 
    }
    catch (error)
    {
      console.log("error");
      
    }
}