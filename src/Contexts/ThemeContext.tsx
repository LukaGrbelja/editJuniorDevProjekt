import { createContext } from "react";

export const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
    return (
        <ThemeContext.Provider value={{}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;