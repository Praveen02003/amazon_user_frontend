export const logout = (count,setCount,navigate) => {
    localStorage.removeItem("Token");
    localStorage.removeItem("loginuserdata")
    localStorage.removeItem("loginuserdataemail")
    localStorage.removeItem("mail")
    setCount(count+1)
    navigate('/')
}