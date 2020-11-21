import React,{useState, useEffect, useReducer} from 'react';


export default class HooksDemo extends React.Component{

    render(){
        return (
            <div style={{textAlign:'left',padding:20,fontSize:24,height:'100%'}}>
                <div className="content-box">
                    <p className="white"></p>
                    <p className="white content">1.useState 为函数式组件提供了一个内部状态管理，似 class 组件的 setState</p>
                    <p className="white content">2.useEffect 函数组件中没有生命周期，可以使用 useEffect 来替代，可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合</p>
                    <p className="white content">3.<span className="selected">useReducer</span> 类似redux,当您具有包含多个子值的复杂状态逻辑,建议使用它</p>
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
    
    //第二个参数，如果只需要执行一次，可以传一个空数组；或者某个特定的值改变是执行[name]
    useEffect(()=>{
        let timer = setInterval(()=>{
            setTime(new Date())
        },1000);
        //有些副作用可能需要清除，所以需要返回一个函数，比如挂载时设置定时器，卸载时取消定时器
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
    switch(action.type){
        case 'add':
            case 'del':
            return action.payload
        default:
            return state;
    }
}