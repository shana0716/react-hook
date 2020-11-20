import React,{ useState } from 'react';
import { GetData } from './store';
import {Link} from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');

    const { dispath } = GetData();

    const onChange = (value, set) => {
        set(value)
    }

    const onSubmit = () => {
        dispath({payload:{name,sex}, type:'submit'})
    }

    const marginTop = {marginTop:20};

    return (
        <div style={{padding:40}}>
            <p className="title">表单</p>
            <div style={marginTop}>
                <label>姓名：</label>
                <input value={name} onChange={(e)=>onChange(e.target.value, setName)} />
            </div>
            <div style={marginTop}>
                <label>性别：</label>
                <input value={sex} onChange={(e)=>onChange(e.target.value, setSex)} />
            </div>
            <button style={marginTop} onClick={onSubmit}>提交</button>
            <div className="link">
                <Link to="/table">表单录入数据</Link>
                <Link to="/stateManage">stateManage</Link>
            </div>
        </div>
    )
}