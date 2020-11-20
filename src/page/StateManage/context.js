import React, { useReducer } from 'react';
import {myState, myReducer, myContext} from './store';

function Context (props) {
    const [context,dispath] = useReducer(myReducer,JSON.stringify(myState));
    const { Provider } = myContext;
    return (
        <Provider value={{data:context,dispath}}>
            {props.children}
        </Provider>
    )
}

export default Context

