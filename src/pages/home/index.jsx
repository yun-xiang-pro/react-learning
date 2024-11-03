import { useState } from "react";
import { useEffect } from "react"

const Home = () => {
    const [count, setCount] = useState(0);
    const [datas, setDatas] = useState([])

    const getData = () => {
        return new Promise((resolve,react) => {
            setTimeout(() => {
                const list = [
                    {name:'小红'},
                    {name:'小刚'},
                    {name:'小兰'},
                ]
                resolve(list)
            }, 2000);

        })

    }

  
    useEffect(() => {
        let ele =  document.getElementById('count')
       
       console.log('ele:', ele)
        getData().then((res) => {
            setDatas(res)
        })
    }, [count]);

    useEffect(() => {
        return () => {
            console.log('页面卸载')
        }
    })

    const add = () => {
        setCount(count + 1)

    }


    return (
        <div>
            <h1>Home</h1>
            <div>
                阻止在网页中右键菜单、文本选择开始以及复制操作
            </div>
            {/* <div id="count">{count}</div>
            <div>{
                datas?.map((item,index) => (
                    <p key={index}>{item.name}</p>
                ))
            }</div>
            <button onClick={add}>加</button> */}
        </div>
    )
}

export default Home