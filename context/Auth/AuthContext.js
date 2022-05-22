import React, { createContext, useState } from 'react'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, setState] = useState(INITIAL_STATE)

    return (
        <AuthContext.Provider 
            value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    )
}