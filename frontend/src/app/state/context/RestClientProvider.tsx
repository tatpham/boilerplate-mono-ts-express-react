import Axios, { AxiosInstance, AxiosPromise } from 'axios';
import { createContext, useContext, useMemo } from 'react';

export type RestClientT = AxiosInstance;
export type RestClientResponse = AxiosPromise;

const axios = Axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

const RestClientContext = createContext<AxiosInstance>(axios);

export default function RestClientProvider({
  children,
}: React.PropsWithChildren<unknown>) {
  const client = useMemo(() => {
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axios;
  }, []);

  return (
    <RestClientContext.Provider value={client}>
      {children}
    </RestClientContext.Provider>
  );
}

export function useRestClient() {
  return useContext(RestClientContext);
}
