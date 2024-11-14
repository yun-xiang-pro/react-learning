import { Link,NavLink } from "react-router-dom"

const Home = () => {

    return (
        <div>
            <h1>react rputer 传参</h1>
            <NavLink  to={'/'}>Home</NavLink>
            <NavLink to={'/page1/123'}>跳转到Page1页面</NavLink>
            <NavLink  to={'/page2?id=456'}>跳转到Page2页面</NavLink>
            <NavLink  to="/page3" state={{id:789}}>跳转到Page3页面</NavLink>
        </div>
    )
}

export default Home