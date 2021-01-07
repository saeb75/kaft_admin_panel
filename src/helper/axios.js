const { default: axios } = require("axios");
const token = window.localStorage.getItem("token");
const instance = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default instance;
