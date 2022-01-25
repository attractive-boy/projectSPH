import Mock from 'mockjs';
//webpack 默认对外暴露的：图片、json
import banner from './banner.json';
import floor from './floor.json';
//mock参数:第一个请求的地址，第二个请求数据
Mock.mock("/mock/banner",{code:200,data:banner});
Mock.mock("/mock/floor",{code:200,data:floor});