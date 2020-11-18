import {GetContextData} from '../context'

export default function () {
    const context = GetContextData();

    return (
        <div>
            children ==》 {context.data.name}
        </div>
    )
}