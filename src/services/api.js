import axios from "axios";

import {BACKEND_URL, DEFAULT_TIMEOUT, HttpCode} from "../const";

const createAPI = (onUnauthorized) => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: DEFAULT_TIMEOUT,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    const {response} = error;

    if (response.status === HttpCode.UNAUTHORIZED) {
      onUnauthorized();
      throw error;
    }

    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
