
import { createContext,useContext } from 'react';

const myState = [];

const myContext = createContext();

const myReducer = (state,action)=>{
    switch(action.type){
        case 'submit':
            return 'sdfsdfsdf'
        default:
            return state;
    }
}

const GetData = () => {
    const context = useContext(myContext);
    return context;
}

export {myReducer, myState, myContext, GetData}