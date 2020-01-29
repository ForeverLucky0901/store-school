import Home from '../component/Home'
import Login from '../component/Login'
import Index from "../component/children/Index"
import Devide from "../component/children/devide"
import My from "../component/children/my"
const routes = [
    {

        path: '/',
        redirect: '/home'

    },
    {
        path: "/home",
        component: Home,
        children: [
            {
                path:"/home",
                redirect:"/home/index"
            },  
            {
                path: "/home/index",
                component: Index
            },
            {
                path: "/home/devide",
                component: Devide
            },
            {
                path: "/home/My",
                component: My
            },
            // {
            //     rediect: "/home/index",
                
            // }
        ]
    },
    {
        path: "/Login",
        component: Login,
    },

]
export default routes