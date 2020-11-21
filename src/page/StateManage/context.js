import React, { useReducer } from 'react';
import {myState, myReducer, myContext} from './store';

function Context (props) {
    const [context,dispatch] = useReducer(myReducer,myState);
    const { Provider } = myContext;
    return (
        <Provider value={{data:context,dispatch}}>
            {props.children}
        </Provider>
    )
}

export default Context

