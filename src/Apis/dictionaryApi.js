/** @format */

import axios from "axios";
const baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default axios.create({
  baseURL,
});
