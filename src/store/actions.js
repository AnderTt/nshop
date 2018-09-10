/*包含多个简介更新状态的action函数*/
import {
  RECEIVE_HOME,
  RECEIVE_KNOWLEDGE,
  RECEIVE_CATEGORY
} from './mutation-types';
import {
  reqHome,
  reqKnowledge,
  reqCategory
} from '../api'
//获取home的action
export default {
  async getHome({commit}){
    const result =await reqHome();
    console.log(result,'result')
    if(result.code===0){
      const home =result.data
      console.log(home,'--1')
      commit(RECEIVE_HOME,{home})
    }
  },
  async getKnowledge({commit}){
    const result =await reqKnowledge();
    if(result.code===0) {
      const Knowledge =result.data
      commit(RECEIVE_KNOWLEDGE, {Knowledge})
    }
  },
  async getCategory({commit},cd){
    const result =await reqCategory();
    if(result.code===0) {
      const category =result.data
      commit(RECEIVE_CATEGORY, {category})
      cd && cd()
    }
  }
}
