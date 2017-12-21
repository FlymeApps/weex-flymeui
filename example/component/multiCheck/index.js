import entry from './index.vue'
const meta = weex.requireModule('meta')
// 配置 viewport 的宽度为 1080px
meta.setViewport({
  width: 1080
})
entry.el = '#root'
export default new Vue(entry)
