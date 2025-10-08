export const generateqr = (navigate, setPaymentprice, setPaymentqr) => {
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
            const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${pricedata}`
            setPaymentqr(qrcode)
        }
    }

}