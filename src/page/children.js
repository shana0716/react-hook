import {GetContextData} from '../context'

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    const context = GetContextData(),{dispath} = context;
    return ( 
        <div>
            children ==》 {context.data.name}
            children ==》 {context.data.children}
            <button onClick={()=>dispath({type:'children',payload:{children:'children2'}})}>change-children</button>
        </div>
    )
}