<template>
  <div class="license-container" style="max-width: 800px; margin: 50px auto; padding: 0 20px;">
    <el-page-header content="使用许可" @back="$router.push('/')"></el-page-header>
    <el-card shadow="hover" style="margin-top: 20px; padding: 20px;">
      <div style="line-height: 1.8; color: #333; font-size: 14px;">
        <h3 style="color: #2563eb; margin: 15px 0;">1. 许可协议</h3>
        <p>本工具站的源代码基于 <strong>MIT 开源许可协议</strong> 发布，你可自由使用、复制、修改、分发本项目的源代码，包括商用用途，但需保留原作者的版权声明。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">2. 工具使用权限</h3>
        <ul style="padding-left: 20px; margin: 10px 0;">
          <li>个人用户：可免费使用本工具站的所有功能，无使用次数、时间限制；</li>
          <li>企业/商用用户：可免费使用本工具站的基础功能，如需定制开发、技术支持等增值服务，需联系我们获取授权。</li>
        </ul>

        <h3 style="color: #2563eb; margin: 15px 0;">3. 禁止行为</h3>
        <p>禁止将本工具站用于违反法律法规、侵犯他人知识产权、危害网络安全的场景，禁止篡改、破解本工具站的代码以规避许可限制。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">4. 许可协议变更</h3>
        <p>开源代码的 MIT 许可协议永久有效，商用增值服务的许可条款如有变更，将在本页面公示。</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

// 使用许可页SEO配置
useHead({
  title: '使用许可 - 极简文本工具站 | MIT开源 免费商用',
  meta: [
    { 
      name: 'keywords', 
      content: '使用许可,MIT开源,免费商用,文本工具站许可' 
    },
    { 
      name: 'description', 
      content: '极简文本工具站使用许可：源代码基于MIT协议开源，个人/企业可免费使用基础功能，商用增值服务需授权。' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
@media (max-width: 768px) {
  .license-container {
    margin: 20px auto !important;
    padding: 0 10px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  p, li {
    font-size: 13px !important;
  }
}
</style>