import {reqGoodsInfo,reqAddOrUpdateShopCar} from '@/api';
const state = {
    goodInfo:{}
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    async getGoodInfo({commit},skuId){
        const result = await reqGoodsInfo(skuId);
        if(result.code == 200){
            commit('GETGOODINFO',result.data);
        }
    },
    async addOrUpdateShopCar({commit},{skuId,skuNum}){
        let result = await reqAddOrUpdateShopCar(skuId,skuNum);
        if(result.code == 200){
            alert("加入购物车成功");
        }
    }
};
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}