import { createContext, useState, useEffect } from "react";

export const UserContext = createContext<userContextProvider>({user: "", logIn(user) {user}, logOut() {},});

const UserContextProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<userContext>(localStorage.getItem("user"));

    useEffect((): void => {
        let storedData: userContext = localStorage.getItem("user");
        setUser(storedData);
    }, []);

    const logIn = (user: string): void => {
        localStorage.setItem("user", user);
        setUser(user);
    }

    const logOut = (): void => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;