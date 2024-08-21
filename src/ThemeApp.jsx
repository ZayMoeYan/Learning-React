import { createContext } from "react";
import App from "./App";
import './index.css';

export const AppContext = createContext();

export default function ThemeApp() {
    return (
        <AppContext.Provider value={{mode:"dark"}}>
            <App/>
        </AppContext.Provider>
    );
}