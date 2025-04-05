import { createContext, FC, useContext, useState } from "react";


export interface contextInterfe {
    refresh:{
        isRefreshing: boolean,
        refresh: () => void
    }
} 

const initialState:contextInterfe = {
    refresh: {
        isRefreshing: true,
        refresh: () => {}
    }
}

const context = createContext<contextInterfe>(initialState);

/**
 * Provides a context for refreshing the quotes.
 *
 * The context contains a single property, `refresh`, which is an object with two properties:
 * - `isRefreshing`: a boolean indicating whether the quotes are currently being refreshed.
 * - `refresh`: a function that can be called to refresh the quotes.
 *
 * This context provider should be used in the root component of the app.
 */
export function ContextProvider({children}:{ children: React.ReactNode }){
    const [isRefresh, setIsRefresh] = useState<boolean>(false);
    return(
        <context.Provider value={{
            refresh:{
                isRefreshing: isRefresh,
                refresh:()=>{
                    setIsRefresh(true);
                    setTimeout(()=>{
                        setIsRefresh(false);
                    }, 800)
                }  
            }
        }}>
            {children}
        </context.Provider>
    )
}

export const useRefreshContext = () => {
    const contextValue = useContext(context) ;
    return contextValue?.refresh;
}
