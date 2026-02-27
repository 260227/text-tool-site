import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. 引入所有需要的插件（按顺序整理）
import { createHead } from '@vueuse/head' // Head 插件
import ElementPlus from 'element-plus'     // Element Plus 核心
import 'element-plus/dist/index.css'       // Element Plus 样式（关键）
import { ElMessage } from 'element-plus'   // ElMessage 组件

// 2. 只创建一次 Vue 实例（核心修复）
const app = createApp(App)

// 3. 创建 Head 实例（先创建再注册）
const head = createHead()

// 4. 注册所有插件（必须在 mount 之前）
app.use(router)          // 注册路由
app.use(head)            // 注册 Head 插件
app.use(ElementPlus)     // 注册 Element Plus（含样式）

// 5. 全局挂载 ElMessage（方便组件内调用）
app.config.globalProperties.$message = ElMessage

// 6. 最后挂载实例到 DOM（所有插件注册完成后）
app.mount('#app')