import { User } from "./screens/projectList/searchPanel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider_token__';

interface AuthForm {
    username: string;
    password: string;
}

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '');
    return user;
}

export const login = (form: AuthForm) => {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
    }).then(
        async res => {
            if (res.ok) {
                return handleUserResponse(await res.json())
            } else {
                return Promise.reject(form);
            }
        })
}

export const register = (form: AuthForm) => {
    return fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
    }).then(
        async res => {
            if (res.ok) {
                return handleUserResponse(await res.json())
            } else {
                return Promise.reject(form);
            }
        })
}

export const logout = async () => window.localStorage.removeItem(localStorageKey);