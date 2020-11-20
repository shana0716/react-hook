import React,{Component} from 'react';
import store from './store.js';

export default class ReduxDemo extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentDidMount(){
        store.subscribe(()=>{
            // this.setState({}); //更新方法1
            this.forceUpdate(); //更新方法2  推荐使用
        })
    }

    replaceReducer=()=>{
        const nextReducer = (state, action)=>{
            switch (action.type){
                case 'add': 
                    return state+2;
                case 'minus':
                    return state-2;
                default:
                    return state;
            }
        }
        store.replaceReducer(nextReducer);
    }

    render(){
        console.log(store)
        return(
            <div style={{textAlign:'left',padding:20}}>
                <div className="content-box">
                    <p className="title white">ReduxDemo</p>
                    <p className="white">1.需要一个store来储存数据</p>
                    <p className="white">2.store里的的reducer初始化state并定义state的修改规则</p>
                    <p className="white">3.通过dispatch一个action来提交对数据的修改</p>
                    <p className="white">4.action提交到reducer函数里，根据传入的action的type，返回新的state</p>
                </div>

                <div className="content-demo" style={{fontSize:24}}>
                    <div className="content-box" style={{color:'white',fontSize:16}}>
                        <p><span className="title">createStore</span> 创建一个store</p>
                        <p><span className="title">dispatch:</span> ƒ dispatch(action)</p>
                        <p><span className="title">getState:</span> ƒ getState()</p>
                        <p><span className="title">replaceReducer:</span> ƒ replaceReducer(nextReducer)  //替换最初的reducer，后面的dispath均执行替换后的reducer</p>
                        <p><span className="title">subscribe:</span> ƒ subscribe(listener) // 监听state改变</p>
                    </div>
                    <div style={{marginTop: 40}}>
                        <p>getState =》 {store.getState()}</p>
                        <p>dispatch =》 
                            <button type="primary" onClick={()=>store.dispatch({type:'add'})}>增加</button> 
                            <button type="primary" onClick={()=>store.dispatch({type:'minus'})}>减少</button>
                        </p>
                        <p>replaceReducer =》 <button type="primary" onClick={this.replaceReducer}>replaceReducer</button> </p>
                    </div>
                </div>
            </div>
        )
    }
}