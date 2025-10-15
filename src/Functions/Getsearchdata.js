import axios from "../Axios/Axios.js"

export const getsearchdata = async (search, setSearchdata, navigate) => {
    try {
        const userdata = {
            datas: search
        }
        const response = await axios.post("/getsearcheddata", userdata)
        console.log(response.data.message);

        setSearchdata(response.data.message)
        
        navigate('/search')

    } catch (error) {
        console.log("error");

    }

}