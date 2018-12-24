import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
// import 'bulma/css/bulma.css'

require('./sass/mystyles.scss');

Vue.config.productionTip = false
Vue.use(Vue2Filters);

new Vue({
    render: h => h(App)
}).$mount('#app')
