import React from 'react';
import { GetData } from './store';
import {Link} from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const {data, dispatch} = GetData();

    const del=(key)=>{
        dispatch({payload: key, type:'del'})
    }

    return (
        <div style={{padding:40}}>
            <p className="title">列表</p>
            <div style={{marginTop:40}}>
                <table style={{fontSize: 20}}>
                    <thead>
                        <tr>
                            <td>姓名</td>
                            <td>性別</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((val, key)=>(
                            <tr key={'table'+key}>
                                <td>{val.name}</td>
                                <td>{val.sex}</td>
                                <td className="operate"><span onClick={del.bind(this, key)}>刪除</span></td>
                            </tr> 
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to="/form">继续录入</Link>
        </div>
    )
}