import axios from "axios";
import CryptoJS from "crypto-js";

function createInstance(baseURL: string, data: object | undefined, url: string) {
  const axiosInstance = axios.create({ baseURL });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      if (url != "/signup") {
        const signstr =
          config.method?.toLocaleUpperCase() +
          url +
          (data ? JSON.stringify(data) : "") +
          localStorage.getItem("secret");

        const sign = CryptoJS.MD5(signstr).toString();
        console.log(sign, signstr);
        config.headers.Sign = sign;
        config.headers.Key = localStorage.getItem("key");
      }

      if (config.headers) {
        config.headers.Accept = "application/json";
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    async (res) => res,
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

const instance = (url: string, data: object | undefined) =>
  createInstance("https://0001.uz", data, url);

export const useGet = (url: string, data: object | undefined) => {
  return instance(url, data).get(url);
};

export const usePost = (url: string, data: object | undefined) => {
  return instance(url, data).post(url, data);
};

export const usePatch = (url: string, data: object | undefined) => {
  return instance(url, data).patch(url, data);
};
export const usePut = (url: string, data: object | undefined) => {
  return instance(url, data).put(url, data);
};

export const useDelete = (url: string, data: object | undefined) => {
  return instance(url, data).delete(url, data);
};
