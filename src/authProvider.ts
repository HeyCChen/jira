import { User } from "./screens/projectList/searchPanel";

const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = '__auth_provider';

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = ({ user }: { user: User }) => {
    window.localStorage.setItem(localStorageKey, user.token || '');
    return user;
}

export const login = (data: { username: string, password: string }) => {
    fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(
        async res => {
            if (res.ok) {

            }
        })
}

export const register = (data: { username: string, password: string }) => {
    fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(
        async res => {
            if (res.ok) {

            }
        })
}

export const logout = () => window.localStorage.removeItem(localStorageKey);