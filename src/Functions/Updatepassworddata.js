import axios from '../Axios/Axios.js'
export const update = async (loginemail, updateconfirmpassword, updatepassword, navigate) => {
    const userdata = {
        email: loginemail,
        password: updateconfirmpassword
    }
    if (!loginemail || !updateconfirmpassword || !updatepassword) {
        alert("Please Fill All the Data")
    }
    else {
        if (updateconfirmpassword === updatepassword) {
            try {
                const response = await axios.post("/updatepassword", userdata)
                alert(response.data.message)
                if (response.data.message === "Password Update Successfully") {
                    navigate('/login')
                }
            }
            catch (error) {
                console.log("error");
            }
        }
        else
        {
            alert("New Password and Confirm Password are Not Match")
        }
    }

}