export interface ApiClient {
    get<T>(url: string, accessToken?: string): Promise<T>;
    post<T>(url: string, data: any, accessToken?: string): Promise<T>;
    // patch<T>(url: string, data: any, accessToken?: string): Promise<T>;
    // delete<T>(url: string, accessToken?: string): Promise<T>;
}
