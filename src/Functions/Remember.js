export const remember = (loginemail, count, setCount) => {
    if (localStorage.getItem("loginemail")) {
        localStorage.removeItem("loginemail")
        setCount(count + 1)
    }
    else {
        localStorage.setItem("loginemail", loginemail)
        setCount(count + 1)
    }
}