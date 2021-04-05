import axios from "axios";

import {BACKEND_URL, DEFAULT_TIMEOUT} from "../const";
import {browserHistory} from "../utils";

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    browserHistory.push(`/error`);
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
