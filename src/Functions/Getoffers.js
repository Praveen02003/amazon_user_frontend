import axios from '../Axios/Axios.js'
export const getoffers = async (setOfferProducts) => {
    const response = await axios.get("/getoffers")
    //console.log(response.data.message);
    setOfferProducts(response.data.message)
}