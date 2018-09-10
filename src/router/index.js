import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../views/Msite/Msite.vue';
import Knowledge from '../views/Knowledge/Knowledge.vue';
import Category from '../views/Category/Category.vue';
import ShopCart from '../views/ShopCart/ShopCart.vue';
import Profile from '../views/Profile/Profile.vue';
import PhoneLogin from '../views/Profile/PhoneLogin/PhoneLogin.vue'
import MailLogin from '../views/Profile/MailLogin/MailLogin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path : '/msite',
      component : Msite,
      meta : {
        isShowFooter : true
      }
    },
    {
      path : '/knowledge',
      component : Knowledge,
      meta :  {
        isShowFooter : true
      }
    },
    {
      path : '/category',
      component : Category,
      meta : {
        isShowFooter : true
      }
    },
    {
      path : '/shopCart',
      component : ShopCart,
      meta : {
        isShowFooter : true
      }
    },
    {
      path : '/profile',
      component : Profile,
    },
    {
      path : '/',
      component : Msite,
      meta : {
        isShowFooter : true
      }
    }
  ]
})
