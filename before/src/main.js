import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { Image } from 'vant';
Vue.use(Image);
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Vant);
import { Card } from 'vant';
import { SubmitBar } from 'vant';
Vue.use(SubmitBar);
Vue.use(Card);
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import { Stepper } from 'vant';
import { Checkbox, CheckboxGroup } from 'vant';
import { Button } from 'vant';
import { CouponCell, CouponList } from 'vant';
import { AddressList } from 'vant';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
Vue.use(AddressList);
Vue.use(CouponCell).use(CouponList);
Vue.use(Button);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Stepper);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
