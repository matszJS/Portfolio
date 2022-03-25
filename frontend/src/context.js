import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const  INITIAL_STATE = { darkmode: true };

const themeReducer = (state,action) =>{
    switch(action.type){
        case 'TOOGLE':
        return { darkmode: !state.darkmode}
        default:
            return state
    }
}

export const ThemeProvider = (props) =>{
    const [state,dispatch] = useReducer(themeReducer, INITIAL_STATE)
    return (
        <ThemeContext.Provider value={{state,dispatch}}>{props.children}</ThemeContext.Provider>
    );
}