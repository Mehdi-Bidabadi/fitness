"use client"
import React, { createContext, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export const UserContext = createContext();

function Layout({children}) {
    const [sell, setSell] = useState(0);
    return (
        <>
        <UserContext.Provider value={{sell, setSell}}>
            <Header />
                {children}
            <Footer />
        </UserContext.Provider>
        </>
    )
}

export default Layout;