import axios from "axios";

const api = axios.create({
  baseURL: "https://api;hithub.com"
});

export default api;
