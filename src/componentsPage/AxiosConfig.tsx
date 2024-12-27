import axios from "axios";

const basePostUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
});

export default basePostUrl;
