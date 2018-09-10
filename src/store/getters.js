/*getters计算属性*/
export default {
  //goodsSupply数组
  goodsSupplyArr(state){
    return  state.home.tagList && state.home.tagList.slice(0,4)
  }
}
