import Vue from 'vue'
import App from './App'
import { toast, loading } from './common/tools'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.toast = toast;
Vue.prototype.loading = loading;

const app = new Vue({
    ...App
})
app.$mount()
