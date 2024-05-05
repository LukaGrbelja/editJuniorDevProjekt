import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<any>(localStorage.getItem("user"));
    
    useEffect(() => {
        let storedData = localStorage.getItem("user");
        setUser(storedData);
    }, []);

    const logIn = (user: any) => {
        localStorage.setItem("user", user);
        setUser(user);
    }

    const logOut = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, logIn, logOut}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;