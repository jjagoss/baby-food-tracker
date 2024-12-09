import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
    id: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: {children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false)

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const login = async(email: string, password: string) => {
        setIsLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setUser({ id: '1', email})
        } finally {
            setIsLoading(false)
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const register = async(email: string, password: string) => {
        setIsLoading(true)
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be within AuthProvider');
    return context;
};