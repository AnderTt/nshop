/*包含多个直接更新状态的mutation*/
import {
  RECEIVE_HOME,
  RECEIVE_KNOWLEDGE,
  RECEIVE_CATEGORY
} from './mutation-types';

export default {
  [RECEIVE_HOME](state,{home}){
    state.home = home
  },
  [RECEIVE_KNOWLEDGE](state,{Knowledge}){
    state.Knowledge = Knowledge
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category = category
  }
}
