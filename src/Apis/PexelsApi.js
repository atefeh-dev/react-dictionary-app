/** @format */
import axios from "axios";
const apiKey = "563492ad6f9170000100000187efb2661e944d1c92cc460ffd289cbd";
const baseURL = "https://api.pexels.com/v1/";
export default axios.create({
  baseURL,
  headers: {
    Authorization: apiKey,
  },
});
