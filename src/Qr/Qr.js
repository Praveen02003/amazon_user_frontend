import React, { useContext, useEffect } from 'react'
import { Mycontext } from '../App'
import { useNavigate } from 'react-router-dom'
import { generateqr } from '../Functions/Generateqr'
import '../Qr/Qr.css'
export const Qr = () => {
    const {
        paymentqr,
        setPaymentqr,
        paymentprice,
        setPaymentprice
    } = useContext(Mycontext)

    const navigate = useNavigate()

    useEffect(() => {
        generateqr(navigate, setPaymentprice, setPaymentqr)
    }, [])
    return (
        <div className="payment-container">
            <h1>Scan QR to Pay</h1>
            <img src={paymentqr} alt="QR code" />
            <p>Total Price: {paymentprice} Rs</p>
        </div>
    )
}
