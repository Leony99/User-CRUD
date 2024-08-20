import { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
    const [dropdownState, setDropdownState] = useState("closed");

    return (
        <DropdownContext.Provider value={{ dropdownState, setDropdownState }}>
            {children}
        </DropdownContext.Provider>
    );
}

export const useDropdownContext = () => useContext(DropdownContext);