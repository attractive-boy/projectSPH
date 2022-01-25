//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
//路由配置信息
export default
    [
        {
            path: '/Detail/:skuid',
            component: Detail,
            meta:{footer_show: true},
        },
        {
            path: '/Home',
            component: Home,
            meta:{footer_show: true},
        },
        {
            path: '/Login',
            component: Login,
            meta:{footer_show: false},
        },
        {
            path: '/Register',
            component: Register,
            meta:{footer_show: false},
        },
        {
            name: 'Search',
            path: '/Search/:keyword?',
            component: Search,
            meta:{footer_show: true},
        },
        //重定向
        {
            path:'*',
            redirect:'/Home'
        }
    ]