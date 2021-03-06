import React, { createContext, useContext, useState, ReactNode } from "react";
import * as auth from '../authProvider';
import { User } from "../screens/projectList/searchPanel";
import { useMount } from "../utils";
import { http } from "../utils/http";

interface AuthForm {
    username: string;
    password: string;
}

const bootstrapUser = async () => {
    let user = null;
    const token = auth.getToken();
    if (token) {
        const data = await http('me', { token: token })
        user = data.user;
    }
    return user;
}

const AuthContext = createContext<{
    user: User | null;
    login: (form: AuthForm) => Promise<void>;
    register: (form: AuthForm) => Promise<void>;
    logout: () => Promise<void>;
} | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (form: AuthForm) => auth.login(form).then(user => setUser(user));
    const register = (form: AuthForm) => auth.register(form).then(user => setUser(user));
    const logout = () => auth.logout().then(() => setUser(null));

    useMount(() => {
        bootstrapUser().then(setUser);
    });

    return <AuthContext.Provider children={children} value={{ user, login, register, logout }} />
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth必须在AuthProvider中使用');
    return context;
}