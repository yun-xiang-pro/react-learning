import { Link , useLocation } from "react-router-dom"
const Page3 = () => {
    const location = useLocation()
    const state = location.state
    const { id } = state
    
    return (
        <div>page3页面
            <div>传递过来的参数：{id}</div>
            <Link to={'/'}>返回首页</Link>
        </div>
    )
}
export default Page3