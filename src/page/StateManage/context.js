import React, { useReducer } from 'react';
import {myState, myReducer, myContext} from './store';

function Context (props) {
    console.log(myState)
    const [context,dispath] = useReducer(myReducer,myState);
    const { Provider } = myContext;
    return (
        <Provider value={{data:context,dispath}}>
            {props.children}
        </Provider>
    )
}

export default Context

