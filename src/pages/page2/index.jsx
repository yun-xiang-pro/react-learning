import { Link , useLocation } from "react-router-dom"
const Page2 = () => {
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const id = queryParams.get('id')
    const type = queryParams.get('type')
    return (
        <div>
            page2页面
            <div>传递过来的参数：{id},type:{type}</div>
            <Link to={'/'}>返回首页</Link>
        </div>
    )
}
export default Page2