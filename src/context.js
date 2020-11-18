import React, { createContext, useContext, useReducer } from 'react';
const data = {name:'shana5'}
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
        case 'add':
            case 'del':
            return action.payload
        default:
            return state;
    }
}