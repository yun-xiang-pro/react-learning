import { NavLink,useNavigate,Outlet } from "react-router-dom"
import style from './index.module.css'

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
        <div className={style.home}>
            <div className={style.articleType}>Java</div>
            <div  className={style.articleType}>Pathyon</div>
            <div  className={style.articleType}>Node</div>
            <div  className={style.articleType}>JS</div>
          
        </div>
    )
}

export default Home