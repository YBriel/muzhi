// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import {post,get,postJson} from './util/axiosUtil'
import {getLocalStorage,setLocalStorage} from './util/utils'

Vue.use(Router);
Vue.prototype.post=post;
Vue.prototype.postJson=postJson;
Vue.prototype.get=get;
Vue.prototype.getLocalStorage=getLocalStorage;
Vue.prototype.setLocalStorage=setLocalStorage;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
