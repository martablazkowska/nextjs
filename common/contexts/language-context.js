import React, { createContext, useState } from 'react'

const LanguageContext = createContext([
    {current: 'en', translations: null, banners: null}, lang => {}]
);

// context provider
const LanguageProvider = ({ children }) => {
    const languageHook = useState({
        current: 'en',
        translations: { fetching: true },
        banners: { fetching: true }
    });

    return <LanguageContext.Provider value={languageHook}>{ children }</LanguageContext.Provider>;
};

export { LanguageContext, LanguageProvider };
