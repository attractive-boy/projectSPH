//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart';
//路由配置信息
export default
    [
        {
            path: '/shopcart',
            component: ShopCart,
            meta:{footer_show: true},
        },
        {
            path: '/addcartsuccess',
            name: 'AddCartSuccess',
            component: AddCartSuccess,
            meta:{footer_show: true},
        },
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