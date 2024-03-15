import axios, { AxiosResponse } from "axios";
import { ApiClient } from "src/Domain/Service/ApiClient";

export class ApiClientAxios implements ApiClient {
    private async request<T>(
        method: string,
        url: string,
        data?: any,
        accessToken?: string
    ): Promise<T> {
        try {
            const headers: any = {};
            if (accessToken) {
                headers.Authorization = `Bearer ${accessToken}`;
            }
            const response: AxiosResponse<T> = await axios.request<T>({
                method,
                url,
                data,
                headers,
            });
            return response.data;
        } catch (error) {
            throw new Error(`Error ${method.toLowerCase()}ing data`);
        }
    }

    async get<T>(url: string, accessToken?: string): Promise<T> {
        return await this.request<T>("GET", url, undefined, accessToken);
    }

    async post<T>(url: string, data: any, accessToken?: string): Promise<T> {
        return await this.request<T>("POST", url, data, accessToken);
    }

    // async patch<T>(url: string, data: any, accessToken?: string): Promise<T> {
    //     return await this.request<T>("PATCH", url, data, accessToken);
    // }

    // async delete<T>(url: string, accessToken?: string): Promise<T> {
    //     return await this.request<T>("DELETE", url, undefined, accessToken);
    // }
}
