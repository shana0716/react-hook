import React,{createContext,useContext} from 'react';

const myContext = createContext({name:'shana'});  //传初始值
const {Provider,Consumer} = myContext;

export default class ContextDemo extends React.Component{

    constructor(props){
        super(props)
        this.state={
            value: 'name'
        }
    }

    render(){
        const {value} = this.state
        return (
            <div style={{textAlign:'left',padding:20,fontSize:24,height:'100%'}}>
                <div className="content-box">
                    <p className="white">使用context可以避免组件套用时，多层级传值(相同数据)</p>
                    <p className="white">使用react提供的createContext创建和useContext获取，创建后会返回Provider,Consumer</p>
                    <p className="white content">1.Provider的value提供放置共享的数据</p>
                    <p className="white content">2.Consumer(消费者)=>需要嵌套在生产者下面。才能通过回调的方式拿到共享的数据源;</p>
                    <p className="white content">contextType</p>
                </div>

                <div className="content-demo">
                    <div>
                        <label>姓名：</label>
                        <input value={value} onChange={(e)=>{
                            this.setState({value: e.target.value})
                        }}></input>
                    </div>
                    <p className='title'>parent</p>
                    <div className="dot-bottom"></div>


                    <Provider value={{name:value}}>
                        <Component1 />
                    </Provider>



                </div>
            </div>
        )
    }
}

function Component1(){
    return (
        <div>
            <p className='title'>children 1</p>
            <div className="dot-bottom"></div>
            <Component2 />
        </div>
    )
}
function Component2(){
    const obj = useContext(myContext);
    return (
        <div>
            <p className='title'>children 2</p>
            <p>这里是使用useContext获取的您输入的值=》<span className='title'>{obj.name}</span></p>
            <div className="splice"></div>
            <Consumer>
                {ctx=><div>这里是使用Consumer获取的您输入的值=》<span className='title'>{ctx.name}</span></div>}
            </Consumer>
            <div className="dot-bottom"></div>
            <Component3 />
        </div>
    )
}


class Component3 extends React.Component{

    componentDidMount(){
        console.log(this.context)
    }

    render(){
        return (
            <div>
                <p className='title'>children 3</p>
                <div>this.context  =》 {this.context.name}</div>
            </div>
        )
    }
}

Component3.contextType = myContext;