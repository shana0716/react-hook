
import { createContext,useContext } from 'react';

const myState = [];

const myContext = createContext();

const myReducer = (state,action)=>{
    let _state = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'submit':
            return _state.concat(action.payload);
        case 'del':
            _state.splice(action.payload,1)
            return _state
        default:
            return state;
    }
}

const GetData = () => {
    const context = useContext(myContext);
    return context;
}

export {myReducer, myState, myContext, GetData}