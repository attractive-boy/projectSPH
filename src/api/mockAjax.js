//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL:'/mock',
    timeout:5000
});

requests.interceptors.request.use((config)=>{
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