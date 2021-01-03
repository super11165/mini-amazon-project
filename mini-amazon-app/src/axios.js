import axios from "axios";

const instance = axios.create({
  //The local API URL
  baseURL: "http://localhost:5001/mini-6b1c3/us-central1/api",
});

export default instance;
