import { useEffect } from "react";
import { Link, useParams} from "react-router-dom"

const Page1 = () => {
    const {id} = useParams()
    console.log('id:', id)
    return (
        <div>
            page1页面
            <br/>
            <div>传递过来的参数：{id}</div>
            <Link to={'/'}>返回首页</Link><br/>
        </div>
       
    )
}
export default Page1