import React from 'react';
import { GetData } from './store';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const data = GetData();
    console.log(data)
    return (
        <div>
            <p>列表</p>
            <div>{JSON.stringify(data)}</div>
        </div>
    )
}