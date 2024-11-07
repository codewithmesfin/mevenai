import Request from "axios";
import { getToken, isAuthenticated, isTokenExpired } from "./auth";

const API_ROOT = "https://api.mevinai.com"



const getAcceessToken = () => {
    const authenticated = isAuthenticated()
    if (authenticated) {
        const token = getToken()
        return token
    }
    else return undefined
}

const api = {
    async signup(user: any, path: any) {
        return await Request.post(`${API_ROOT}${path}`, user,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    },
    async login(user: any, path: any) {
        return await Request.post(`${API_ROOT}${path}`, user,
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    },
    create(data: any, path: any) {
        const token = getAcceessToken()
        const header = token ? {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
        } : undefined
        return Request.post(`${API_ROOT}${path}`, data, header);
    },
    update(data: any, path: any, token?: string) {
        const header = token ? {
            headers: {
                "x-access-token": token,
            },
        } : undefined
        return Request.patch(`${API_ROOT}${path}`, data, header);
    },
    get(id: any, path: any, token?: string, filter?: any,) {
        const q = filter ? `?filter=${JSON.stringify(filter)}` : "";
        const header = token ? {
            headers: {
                "x-access-token": token,
            },
        } : undefined
        return Request.get(`${API_ROOT}${path}?id=${id}${q}`, header);
    },
    all(path: any, token?: string, filter?: any,) {
        const q = filter ? `?${filter}` : "";
        const header = token ? {
            headers: {
                "x-access-token": token,
            },
        } : undefined
        return Request.get(`${API_ROOT}${path}${q}`, header);
    },
    remove(id: any, path: any, token?: string) {
        const header = token ? {
            headers: {
                "x-access-token": token,
            },
        } : undefined
        return Request.delete(`${API_ROOT}${path}/${id}`, header);
    },
   
};
export default api;