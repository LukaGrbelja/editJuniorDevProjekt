import { createContext } from "react";

export const UserContext = createContext({});

const UserContextProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;