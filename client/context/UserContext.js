// import { createContext } from 'react';
// export const userContext = createContext(null);

import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // Assume user data comes from some authentication process
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Create a custom hook to consume the context
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};