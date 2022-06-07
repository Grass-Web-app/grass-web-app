import { useState } from "react";
import axios from "axios";
const URL: string = `${process.env.REACT_APP_BASE_URL}`;

const useAxiosGet = (
  endpoint?: string,
  options?: {
    errorInterceptor?: {
      action?: any;
      message?: string;
    };
    completeInterceptor?: {
      action?: any;
      message?: string;
    };
  }
) => {
  const [isLoading, setisLoading] = useState(false);
  const Get = async (token?: string) => {
    let heas = {};
    if (token) heas = { Authorization: `Bearer ${token}` };
    try {
      const resp = await axios({
        method: "get",
        url: `${URL}${endpoint}`,
        headers: heas,
      });
      if (options?.completeInterceptor?.action) {
        setisLoading(true);
        options.completeInterceptor.action(resp);
      }
      if (options?.completeInterceptor?.message) {
        console.log(options?.completeInterceptor?.message);
      }
    } catch (err) {
      if (options?.errorInterceptor?.action) {
        setisLoading(true);
        options.errorInterceptor.action();
      }
      if (options?.errorInterceptor?.message) {
        console.log(options?.errorInterceptor?.message);
      }
    }
  };

  return { Get, isLoading };
};

export default useAxiosGet;
