//当前模块API统一管理
import requests from "./request";
import mockRequests from './mockAjax';
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList = ()=>mockRequests.get('/banner');
export const reqFloorList = ()=>mockRequests.get('/floor');
export const reqGetSearchInfo = (params)=>requests({url:'/list',method:'post',data:params});
export const reqGoodsInfo = (skuId)=>requests({url:`/item/${skuId}`,method:"get"});
export const reqAddOrUpdateShopCar = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:"post"});