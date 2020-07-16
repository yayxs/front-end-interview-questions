// 从Vue 的出生文件导入
import Vue from './instance/index'
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 将构造函数传入 添加一些全局的API
initGlobalAPI(Vue)

// 在Vue.prototype 上添加 $isServer 只读属性
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 在Vue.prototype 上添加$ssrContext 只读属性
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

// 存储版本号
Vue.version = '__VERSION__'

export default Vue
