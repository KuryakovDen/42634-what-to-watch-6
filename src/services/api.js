import axios from "axios";

import {BACKEND_URL, DEFAULT_TIMEOUT} from "../const";

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true
  });

  return api;
};

export default createAPI;
