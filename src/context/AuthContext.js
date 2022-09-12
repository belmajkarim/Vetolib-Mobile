import React,{createContext,useState} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null)
    const login = () => {
        setUserToken('isuudjhsd');
        setIsLoading(false);
    }

    const logout = () => {
        setUserToken(null);
        setIsLoading(false);
    }
    return(
        <AuthContext.Provider value={{logout,login, isLoading,userToken}}>
            {children}
        </AuthContext.Provider>
    );
}


