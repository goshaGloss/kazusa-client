import axios, { AxiosRequestConfig } from "axios";

export const apiClient = async <T>(
  config: AxiosRequestConfig,
  options: AxiosRequestConfig = {},
): Promise<T> => {
  const instance = axios.create({
    baseURL: "http://localhost:8080/",
  });

  return instance({ ...config, ...options });
};
