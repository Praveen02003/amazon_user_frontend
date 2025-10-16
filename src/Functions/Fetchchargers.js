import axios from "../Axios/Axios.js"

export const fetchchargers=async(setChargerdata)=>{
    const response = await axios.get('/chargers')
    setChargerdata(response.data.message)
}