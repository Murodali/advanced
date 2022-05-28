import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { upperToLowerCase } from "../functions/upperToLowecase";
import { baseURL } from "./baseUrl.utility";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
  const token: string | null = "";
  const newConfig: { [k: string]: any } = { ...config };
  if (token) {
    newConfig.headers.Authorization = `${token}`;
  }
  const updatedConfig: Record<string, unknown> = newConfig;
});

instance.interceptors.response.use((response: AxiosResponse) => {
  upperToLowerCase(response), (error: AxiosError) => Promise.reject(error);
});

const responseBody = (response: AxiosResponse): any => {
  const responseData = response.data;
  if (response.status === 401 || response.status === 403) {
    console.log("refresh token here");
  }
  return responseData;
};

const get = (url: string, params?: string | any) => {
  instance.get(url, { params }).then(responseBody);
};

const post = (url: string, body?: any) => {
  instance.post(url, body).then(responseBody);
};

export { get, post };
