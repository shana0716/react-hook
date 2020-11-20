import React,{useState, useEffect, useReducer} from 'react';


export default class HooksDemo extends React.Component{

    render(){
        return (
            <div style={{textAlign:'left',padding:20,fontSize:24,height:'100%'}}>
                <div className="content-box">
                    <p className="white"></p>
                    <p className="white content">1.useState</p>
                    <p className="white content">2.useEffect</p>
                    <p className="white content">3.useReducer</p>
                </div>
                
                <p className='title'>useState</p>
                <div className="dot-bottom"></div>
                <HooksUseEffect />
                
                <p className='title'>useEffect</p>
                <div className="dot-bottom"></div>
                <HooksUseState />
                
                <p className='title'>useReducer</p>
                <div className="dot-bottom"></div>
                <HooksUseReducer />
            </div>
        )
    }
}

const HooksUseState = () => {
    const [num,setNum] = useState(10);
    return(
        <div>
            <p>{num}</p>
            <p><button onClick={()=>setNum(num+1)}>num+1</button> <button onClick={()=>setNum(num-1)}>num-1</button></p>
        </div>
    )
}


const HooksUseEffect = ()=>{
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date())
        },1000);
        return ()=>clearInterval(timer)
    },[])
    return(
        <div>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}


const HooksUseReducer = ()=>{
    const [names,setNames] = useReducer(nameReducer,['shana']);
    const [val,setVal] = useState('');
    return(
        <div>
            {names.map((val,key)=>(
                <li key={'name'+key}>{val} <button onClick={()=>{
                    let _names = [...names];
                    _names.splice(key,1);
                    setNames({type:'del',payload:_names})
                }}>del</button></li>
            ))}
            <input onChange={(e)=>setVal(e.target.value)} value={val} />
            <button onClick={()=>setNames({type:'add',payload:[...names, val]})}>新增</button>
        </div>
    )
}

const nameReducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'add':
            case 'del':
            return action.payload
        default:
            return state;
    }
}