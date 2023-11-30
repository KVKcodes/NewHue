import { createContext, useContext, useState } from "react";

const AuthContext= createContext("");

export const AuthProvider = ({children}) => {
    const [user, setUser]= useState("");
    const[mail, setMail]= useState("");
    const [page, setPage]= useState("/");
    const login = (u) => {
        setUser(u);
    }
    const logmail = (u) => {
        setMail(u);
    }
    const logout = () => {
        setUser(""); 
        setMail("");
    }
    const currentPage = (p) => {
        setPage(p); 
    }

    return(
        <AuthContext.Provider value={{user, login, mail, logmail, logout, page, currentPage}}>{children}</AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}