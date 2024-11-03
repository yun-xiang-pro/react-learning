
import img1 from '../../assets/images/v2-9b3f958df6148a27bae8d3099df68ed8_1440w.webp'
const Child = (props) => {
    console.log('props:', props)
    props.parentFn()
    const handleClick = () => {
        alert('你触发了点击事件')
    }
    const onFocus  = () => {
        console.log('输入聚焦事件')

    }

    const onBlur  = () => {
        console.log('失焦事件')

    }
    const handleMouseEnter = () => {
        console.log('鼠标移入')

    }

    const handleKeyDown = (e) => {
        console.log('e:', e)

    }

    const handleKeyUp = (e) => {
        console.log('e:', e)

    }

    const handleChange = (e) => {
        console.log('e', e.target.value)
    }

    const handleLoad = () => {
        console.log('图片加载完成')
    }

    return (
        <>
            <button onClick={handleClick}>点击事件</button>
            {/* 输入聚焦事件 (onFocus) */}
            <input onFocus={onFocus} type="text" />
            {/* 失焦事件 (onBlur) */}
            <input onBlur={onBlur} type="text" />
            {/* 鼠标移入事件 (onMouseEnter) */}
            <div onMouseEnter={handleMouseEnter}>鼠标移入事件</div>
            {/* 键盘按下事件 (onKeyDown) */}
            <div  type="text" >键盘按下事件</div>
            <input onKeyDown={handleKeyDown} type="text" />
            {/* 键盘释放事件 (onKeyUp)  */}
            <div  type="text" >键盘释放事件</div>
            <input onKeyUp={handleKeyUp} type="text" />

            {/* 改变事件 (onChange) 当元素加载时触发。 */}
            <div  type="text" >当输入框内容改变时触发</div>
            <input onChange={handleChange} type="text" />
             {/* 加载事件 (onLoad) 当元素加载时触发。 */}
            {/* <img onLoad={handleLoad} src={img1} alt="My Image" /> */}

           


            
        </>
    )
}

export default Child