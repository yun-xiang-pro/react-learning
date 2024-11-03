
import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)
    const [isShow,setIsShow] = useState(false)

    const add = () => {
        setCount(count + 1)

    }
    const sub = () => {
        setCount(count - 1)

    }

    const handleShow = () => {
        setIsShow(true)

    }

    const hide = () => {
        setIsShow(false)

    }


    return (
        <div>
            <div>{count}</div>
            <button onClick={add}>加</button>
            <button onClick={sub}>减法</button>
            {
                isShow && <div>元素内容</div>

            }
            <button onClick={handleShow}>显示</button>
            <button onClick={hide}>隐藏</button>
        </div>
    )

}
export default UseState