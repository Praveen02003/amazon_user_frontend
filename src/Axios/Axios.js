import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5000"
  baseURL: "https://amazon-user-backend-1.onrender.com/"
});

export default instance;
