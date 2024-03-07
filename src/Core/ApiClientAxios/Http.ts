import axios, { AxiosHeaders, AxiosInstance } from "axios";

abstract class Http {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({ baseURL: "" });
    }

    includeFomData(headers?: AxiosHeaders, isMultiPart = false) {
        return {
            ...headers,
            ...(isMultiPart ? { "Content-Type": "multipart/form-data" } : null),
        };
    }

    async get(url: string, params?: object, headers?: AxiosHeaders) {
        return await this.axiosInstance.get(url, { headers, params });
    }

    async post(
        url: string,
        body: object | FormData,
        headers: AxiosHeaders,
        isMultipart = false
    ) {
        return await this.axiosInstance.post(url, body, {
            headers: this.includeFomData(headers, isMultipart),
        });
    }
}

export default Http;
