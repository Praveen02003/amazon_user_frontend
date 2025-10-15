import axios from "../Axios/Axios.js"

export const generateqr = async (navigate, setPaymentprice, setPaymentqr) => {
    const token = localStorage.getItem("Token")
    if (!token) {
        navigate("/login")
    }
    else {
        const mail = localStorage.getItem("loginuserdataemail")
        if (mail) {
            const pricedata = localStorage.getItem(`carttotal`) || localStorage.getItem(`${mail}carttotal`) || {}
            //console.log("====>",pricedata);
            setPaymentprice(pricedata)
            try {
                const userdata = {
                    amount: pricedata,
                    orderId: Math.random()
                }
                const response = await axios.post('/generateqr', userdata)
                setPaymentqr(response.data.message)

            } catch (error) {
                console.log("error");
                
            }
        }
    }

}