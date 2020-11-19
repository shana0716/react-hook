import React, { createContext, useContext, useReducer } from 'react';
const data = {name:'shana5',children:'children'}
const myContext = createContext();

function Context (props) {
    const {children} = props;
    const [context,dispath] = useReducer(nameReducer,data);
    const { Provider } = myContext;
    return (
        <Provider value={{data:context,dispath}}>
            {children}
        </Provider>
    )
}

function GetContextData() {
    const context = useContext(myContext);
    return context
}

export {Context, GetContextData}

const nameReducer = (state,action)=>{
    switch(action.type){
        case 'app':
            return {...state,...action.payload}
        case 'children':
            return {...state,...action.payload}
        default:
            return state;
    }
}