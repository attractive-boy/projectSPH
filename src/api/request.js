//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import store from "@/store";
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL:'/api',
    timeout:5000
});

requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }
    nprogress.start();
    return config;
});

requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},()=>{
    return Promise.reject(new Error("failure"));
});
export default requests;