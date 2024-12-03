import { NavLink,useNavigate,Outlet } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    const goToPage = (path,params) => {
        navigate(path,{state:{params}});
    }

    const goToPageOfSearch = (path) => {
        navigate({
            pathname: path,
            search: '?id=123&type=1'
        });

    }



    return (
        <div>
            <h1>react-router createHashRouter</h1>
            <Outlet/>
            <NavLink  to={'/'}>Home</NavLink>
            {/* <NavLink to={'/page1/123'}>跳转到Page1页面</NavLink> */}
            <div onClick={() => goToPage('/page1',{id:'123', type:1})}>跳转到Page1页面</div>
            {/* <NavLink  to={'/page2?id=456'}>跳转到Page2页面</NavLink> */}
            <div onClick={() => goToPageOfSearch('/page2')}>跳转到Page2页面</div>
            <NavLink  to="/page3" state={{id:789}}>跳转到Page3页面</NavLink>
          
        </div>
    )
}

export default Home