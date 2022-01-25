//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
//使用插件
Vue.use(VueRouter);
//重写push方法清除未传递回调函数的警告
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject)
    {
        originPush.call(this,location,resolve,reject);
    }
    else
    {
        originPush.call(this,location,()=>{},()=>{});
    }
}
//配置路由
export default new VueRouter({
    routes,
    scrollBehavior (to, from, savedPosition){
        return {y:0};
    }
})