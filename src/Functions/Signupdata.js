import axios from "../Axios/Axios.js"
import { handleopen } from "./Handleopen.js"

export const signup = async (name,email,password,confirmpassword,setOpen,signuperror,setSignuperror,setSeverity) => {
    const userdata = {
        name: name,
        email: email,
        password: password
    }
    if (!name || !email || !password || !confirmpassword) {
        //alert("Please Fill All The Data")
        handleopen(setOpen)
        setSeverity("info")
        setSignuperror("Please Fill All The Data")
    }
    else {
        if (password != confirmpassword) {
            //alert("Password and Confirm Password are Mismatch")
            handleopen(setOpen)
            setSeverity("error")
            setSignuperror("Password and Confirm Password are Mismatch")
        }
        else {
            try {
                const response = await axios.post('/signup', userdata)
                if (response.data.message === "Signup Successfully")
                {
                    handleopen(setOpen)
                    setSeverity("success")
                    setSignuperror(response.data.message)
                }
                else
                {
                    //alert(response.data.message)
                    handleopen(setOpen)
                    setSeverity("error")
                    setSignuperror(response.data.message)
                }
            }
            catch (error) {
                console.log("error");
            }
        }
    }
}