import axios from "../Axios/Axios.js"
import { getloginuserdetails } from "./Getlloginuserdetails.js"
import { handleopen } from "./Handleopen.js"

export const login = async (loginemail, loginpassword, navigate, setLoginerror, setSeverity, setOpen, count, setCount) => {
    if (!loginemail || !loginpassword) {
        //alert("Please Fill all the Data")
        setLoginerror("Please Fill all the Data")
        setSeverity("info")
        handleopen(setOpen)
    }
    else {
        const userdata = {
            email: loginemail,
            password: loginpassword
        }
        try {
            const response = await axios.post('/login', userdata)
            if (response.data.message === "Login Successfully") {
                //console.log(response.data.message);
                //console.log(response.data.Token);
                //alert(response.data.message)
                setLoginerror(response.data.message)
                setSeverity("success")
                handleopen(setOpen)
                localStorage.setItem("Token", response.data.Token)
                localStorage.setItem("mail", loginemail)
                getloginuserdetails(count, setCount, navigate)
                setTimeout(() => {
                    navigate('/')
                    setCount(count + 1)
                }, 600)
            }
            else {
                //alert(response.data.message)
                setLoginerror(response.data.message)
                setSeverity("error")
                handleopen(setOpen)
            }
        }
        catch (error) {
            console.log("error");
        }
    }
}