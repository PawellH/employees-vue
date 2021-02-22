import axios from "axios";

console.log(process.env);
export default axios.create({
  withCredentials: true,
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-type": "application/json",
  },
});
