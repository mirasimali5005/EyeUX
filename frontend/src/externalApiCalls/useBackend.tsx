import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

const BACKEND_URL = 'http://localhost:5001';
const useBackend = (baseURL: string = BACKEND_URL, baseConfig: AxiosRequestConfig = {}) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const request = useCallback(async (config: AxiosRequestConfig) => {
        setLoading(true);
        try {
            const response = await axios({ baseURL, ...baseConfig, ...config });
            setData(response.data);
            setError(null);
        } catch (err) {
            setError((err as any).message);
        } finally {
            setLoading(false);
        }
    }, [baseURL, baseConfig]);

    const fetchData = useCallback((endpoint: string, config: AxiosRequestConfig = {}) => {
        request({ url: endpoint, method: 'GET', ...config });
    }, [request]);

    const postData = useCallback((endpoint: string, payload: any, config: AxiosRequestConfig = {}) => {
        request({ url: endpoint, method: 'POST', data: payload, ...config });
    }, [request]);

    const putData = useCallback((endpoint: string, payload: any, config: AxiosRequestConfig = {}) => {
        request({ url: endpoint, method: 'PUT', data: payload, ...config });
    }, [request]);

    const deleteData = useCallback((endpoint: string, config: AxiosRequestConfig = {}) => {
        request({ url: endpoint, method: 'DELETE', ...config });
    }, [request]);

    return { data, loading, error, fetchData, postData, putData, deleteData };
};

export default useBackend;
