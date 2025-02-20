import axios, { AxiosRequestConfig, Method } from "axios";

const axiosInstance = axios.create({});

export const apiConnector = async (
  method: Method, 
  url: string, 
  bodyData?: Record<string, any> | null,
  headers?: Record<string, string> | null, 
  params?: Record<string, any> | null 
) => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url,
      data: bodyData || undefined, 
      headers: headers || undefined,
      params: params || undefined,
    };

    const response = await axiosInstance(config);
    return response.data;
  } catch (error) {
    console.error("API call error:", error);
    throw error;
  }
};
