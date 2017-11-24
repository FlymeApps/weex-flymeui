import Router from 'vue-router'
import App from './index.vue'
import home from './index/components/home.vue'
import detail from './index/components/detail.vue'
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 1080px
meta.setViewport({  
  width: 1080
})

Vue.use(Router)

const router = new Router({
  // mode: 'abstract',
  routes: [
    { path: '/', component: home },
    { name:'detail', path: '/detail', component: detail },
  ]
})

export default new Vue({
  el: '#root',
  router,
  render: h => h(App)
})
router.push('/')
