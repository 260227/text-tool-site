import { createRouter, createWebHistory } from 'vue-router'
// 导入三个合规页面
import Privacy from '../views/Privacy.vue'
import Disclaimer from '../views/Disclaimer.vue'
import License from '../views/License.vue'
// 导入原有页面
import Home from '../views/Home.vue'
import JsonFormatter from '../views/JsonFormatter.vue'
import TextDeduplicate from '../views/TextDeduplicate.vue'
import Base64Tool from '../views/Base64Tool.vue'
import UrlEncodeTool from '../views/UrlEncodeTool.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/json-formatter', name: 'JsonFormatter', component: JsonFormatter },
  { path: '/text-deduplicate', name: 'TextDeduplicate', component: TextDeduplicate },
  { path: '/base64-tool', name: 'Base64Tool', component: Base64Tool },
  { path: '/url-encode-tool', name: 'UrlEncodeTool', component: UrlEncodeTool },
  // 添加合规页面路由
  { path: '/privacy', name: 'Privacy', component: Privacy },
  { path: '/disclaimer', name: 'Disclaimer', component: Disclaimer },
  { path: '/license', name: 'License', component: License }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router