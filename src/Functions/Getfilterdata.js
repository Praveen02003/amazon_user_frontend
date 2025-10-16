import axios from "../Axios/Axios.js"

export const getfilterdata = async(value, filter, setFilter, setFilterdata, navigate) => {
    // setFilter(value)
    const [min, max] = value.split("-")
    try {
        const userdata = {
            minimum: min,
            maximum: max
        }
        const response = await axios.post('/getfiltereddata', userdata)
        console.log(response.data.message);
        
        setFilterdata(response.data.message)
        navigate('/filter')

    } catch (error) {
        console.log("error");

    }

}