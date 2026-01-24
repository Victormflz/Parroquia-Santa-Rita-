import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode, FC } from 'react';
import { Language } from '../types';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    cycleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(Language.ES);

    const cycleLanguage = useCallback(() => {
        const langs = [Language.ES, Language.GL, Language.EN];
        const currentIndex = langs.indexOf(language);
        setLanguage(langs[(currentIndex + 1) % langs.length]);
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, cycleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
