<template>
  <div class="policy-container" style="max-width: 800px; margin: 50px auto; padding: 0 20px;">
    <el-page-header content="隐私政策" @back="$router.push('/')"></el-page-header>
    <el-card shadow="hover" style="margin-top: 20px; padding: 20px;">
      <div style="line-height: 1.8; color: #333; font-size: 14px;">
        <h3 style="color: #2563eb; margin: 15px 0;">1. 数据收集与存储</h3>
        <p>本工具站为<strong>纯前端本地运行</strong>的在线工具，所有文本处理（JSON格式化、文本去重、Base64加解密、URL转码）均在你的浏览器本地完成，<strong>无任何用户输入数据上传至服务器</strong>，我们不会收集、存储、传输你的任何文本内容、设备信息、IP地址等数据。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">2. Cookie 与追踪技术</h3>
        <p>本工具站不使用 Cookie、LocalStorage、SessionStorage 等技术存储任何用户相关数据，也不使用第三方统计、广告、追踪工具。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">3. 数据安全</h3>
        <p>由于所有操作均在本地完成，数据安全完全由用户自身掌控。建议你不要在公共设备上处理敏感文本，操作完成后可清空输入框内容，关闭浏览器以彻底清除本地缓存。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">4. 隐私政策变更</h3>
        <p>我们可能会不定期更新本隐私政策，变更后的政策将在本页面公示，继续使用本工具视为接受变更后的政策。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">5. 联系我们</h3>
        <p>若你对隐私政策有任何疑问，可通过 GitHub 仓库（<a href="https://github.com/260227/text-tool-site" target="_blank" style="color: #2563eb;">点击访问</a>）提交 Issue 联系我们。</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

// 隐私政策页SEO配置
useHead({
  title: '隐私政策 - 极简文本工具站 | 本地处理 无数据收集',
  meta: [
    { 
      name: 'keywords', 
      content: '隐私政策,文本工具站隐私,本地处理,无数据收集,数据安全' 
    },
    { 
      name: 'description', 
      content: '极简文本工具站隐私政策：所有操作本地完成，无数据上传、无收集、无存储，保障用户信息安全。' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
/* 移动端适配 */
@media (max-width: 768px) {
  .policy-container {
    margin: 20px auto !important;
    padding: 0 10px !important;
  }
  h3 {
    font-size: 16px !important;
  }
  p {
    font-size: 13px !important;
  }
}
</style>