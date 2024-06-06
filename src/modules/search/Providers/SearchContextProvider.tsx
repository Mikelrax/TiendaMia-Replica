import { createContext, useState, useContext, ReactNode } from 'react';

interface SearchContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchContextProvider = ({ children }: { children: ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};