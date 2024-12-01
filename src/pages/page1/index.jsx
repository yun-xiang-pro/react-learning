import { Link, useLocation, Outlet} from "react-router-dom"

const Page1 = () => {
   
    // const location = useLocation()
    // const {id, type} = location.state.params
    // console.log('location:', location)
    return (
        <div>
            page1页面
            <br/>
            {/* <div>传递过来的参数：{id},type:{type}</div> */}
            <Link to={'/'}>返回首页</Link><br/>
            <Link to={'/page1/detail'}>详情</Link><br/> <Outlet />
        </div>

    )
}
export default Page1