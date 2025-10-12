import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { Hot } from './Hot/Hot';
import { Wishlist } from './Wishlist/Wishlist';
import { Cart } from './Cart/Cart';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Laptops } from './Categories/Laptops';
import { Mobiles } from './Categories/Mobiles';
import { Earpods } from './Categories/Earpods';
import { Tv } from './Categories/Tv';
import { Hometheatres } from './Categories/Hometheatres';
import { Keyboards } from './Categories/Keyboards';
import { Mouse } from './Categories/Mouse';
import { Chargers } from './Categories/Chargers';
import { createContext, useState } from 'react';
import { Notfound } from './Notfound/Notfound';
import { Checkout } from './Checkout/Checkout';
import { Login } from './Login/Login';
import { Signup } from './Signup/Signup';
import { Forgetpassword } from './Forgetpassword/Forgetpassword';
import { Contact } from './Contact/Contact';
import { Qr } from './Qr/Qr';
export const Mycontext=createContext()
function App() {
  const[usermail,setUsermail]=useState("")
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[confirmpassword,setConfirmpassword]=useState("")
  const[loginemail,setLoginemail]=useState("")
  const[loginpassword,setLoginpassord]=useState("")
  const[updateemail,setUpdateemail]=useState("")
  const[updatepassword,setUpdatepassword]=useState("")
  const[updateconfirmpassword,setUpdateconfirmpassword]=useState("")
  const[laptopdata,setLaptopdata]=useState([])
  const[mobiledata,setMobiledata]=useState([])
  const[earpodsdata,setEarpodsdata]=useState([])
  const[tvdata,setTvdata]=useState([])
  const[hometheatredata,setHometheatredata]=useState([])
  const[keyboarddata,setKeyboarddata]=useState([])
  const[mousedata,setMousedata]=useState([])
  const[chargerdata,setChargerdata]=useState([])
  const[wishlistcheckedobject, setWishlistcheckedobject] = useState({})
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [offerProducts, setOfferProducts] = useState([]);
  const[addtocartobject, setAddtocartobject] = useState({})
  const[cartdatas,setCartdatas]=useState([])
  const[cartpricedatas,setCartpricedatas]=useState([])
  const[cartquantity,setCartquantity]=useState({})
  const[totalprice,setTotalprice]=useState(0)
  const[count,setCount]=useState(0)
  const [open, setOpen] = useState(false);
  const [signuperror, setSignuperror] = useState("");
  const [loginerror, setLoginerror] = useState("");
  const [severity, setSeverity] = useState("");
  const [paymentqr, setPaymentqr] = useState("");
  const [paymentprice, setPaymentprice] = useState("");
  const [showavatar, setShowavatar] = useState(false);

  return (
    <div>
      <Router>
        <Mycontext.Provider value={{
          laptopdata,
          setLaptopdata,
          mobiledata,
          setMobiledata,
          earpodsdata,
          setEarpodsdata,
          tvdata,
          setTvdata,
          hometheatredata,
          setHometheatredata,
          keyboarddata,
          setKeyboarddata,
          mousedata,
          setMousedata,
          chargerdata,
          setChargerdata,
          wishlistcheckedobject,
          setWishlistcheckedobject,
          count,
          setCount,
          wishlistProducts,
          setWishlistProducts,
          offerProducts,
          setOfferProducts,
          addtocartobject,
          setAddtocartobject,
          cartdatas,
          setCartdatas,
          cartquantity,
          setCartquantity,
          totalprice,
          setTotalprice,
          cartpricedatas,
          setCartpricedatas,
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
          confirmpassword,
          setConfirmpassword,
          loginemail,
          setLoginemail,
          loginpassword,
          setLoginpassord,
          updateemail,
          setUpdateemail,
          updatepassword,
          setUpdatepassword,
          updateconfirmpassword,
          setUpdateconfirmpassword,
          usermail,
          setUsermail,
          open,
          setOpen,
          signuperror,
          setSignuperror,
          severity,
          setSeverity,
          loginerror,
          setLoginerror,
          paymentqr,
          setPaymentqr,
          paymentprice,
          setPaymentprice,
          showavatar,
          setShowavatar
        }}>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgetpassword' element={<Forgetpassword/>}/>
            <Route path='/contactus' element={<Contact/>}/>
            <Route path='/hot' element={<Hot/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/laptops' element={<Laptops/>}/>
            <Route path='/mobiles' element={<Mobiles/>}/>
            <Route path='/earpods' element={<Earpods/>}/>
            <Route path='/tvs' element={<Tv/>}/>
            <Route path='/hometheatres' element={<Hometheatres/>}/>
            <Route path='/Keyboards' element={<Keyboards/>}/>
            <Route path='/mouses' element={<Mouse/>}/>
            <Route path='/chargers' element={<Chargers/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Notfound/>}/>
            <Route path='/payment' element={<Qr/>}/>
          </Routes>
          <Footer/>
        </Mycontext.Provider>
      </Router>
    </div>
  );
}

export default App;
