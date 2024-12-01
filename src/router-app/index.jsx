import { useRoutes, createBrowserRouter,RouterProvider, createHashRouter } from "react-router-dom"
import Home from "../pages/home"
import Page1 from "../pages/page1"
import Page2 from "../pages/page2"
import Page3 from "../pages/page3"
import Detail from "../pages/page1/detail"
import Detail2 from "../pages/page1/detail/detail2"
import NotFound from "../pages/not-found"

// 路由模式	url表现	底层原理
// history	url/login	HTML5 的history对象+pushState事件
// hash	url/#/login	监听 HTML5 的hashChange事件

// history 和hash 的主要区别在于它们在 Web 应用中的导航处理方式。history 接口是 HTML5 提供的一个 API，用于管理浏览器的历史记录。它允许开发者通过编程方式导航到不同的 URL，而不会加载整个页面，从而实现单页应用（SPA）中的平滑导航。history API 提供了 pushState、replaceState 和 popstate 等方法来添加、替换和监听历史记录的变化。

// hash（即 URL 中的片段标识符，通常在 # 后面的部分）主要用于客户端内部的页面导航，而不会导致页面重新加载。hash 的变化会触发 hashchange 事件，开发者可以监听这个事件并在事件触发时执行相应的操作。由于 hash 不会发送到服务器，因此在处理客户端路由时更加灵活和高效。


const RouterApps = () => {
    const elements = createHashRouter([
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    path:'page1',
                    element:<Page1/>
                },
                {
                    index:true,
                    // path:'page2',
                    element:<Page2/>
                },
            ]
        },
        // {
        //     path:'/page1',
        //     element:<Page1/>
        // },
        // {
        //     path:'/page2',
        //     element:<Page2/>
        // },
        {
            path:'/page3',
            element:<Page3/>
        },
        {
            path:'/pages/page1/detail',
            element:<Detail/>
        },
        {
            path:'/pages/page1/detail/detail2',
            element:<Detail2/>
        },
        {
            path:'*',
            element:<NotFound/>
        },

    ])

    return (
        <div>
           <RouterProvider router={elements}/>
        </div>
    )

}

export default RouterApps