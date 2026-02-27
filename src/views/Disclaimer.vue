<template>
  <div class="disclaimer-container" style="max-width: 800px; margin: 50px auto; padding: 0 20px;">
    <el-page-header content="免责声明" @back="$router.push('/')"></el-page-header>
    <el-card shadow="hover" style="margin-top: 20px; padding: 20px;">
      <div style="line-height: 1.8; color: #333; font-size: 14px;">
        <h3 style="color: #2563eb; margin: 15px 0;">1. 工具用途说明</h3>
        <p>本工具站仅提供 JSON 格式化、文本去重、Base64 加解密、URL 转码等纯技术文本处理服务，仅用于合法合规的开发、学习场景。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">2. 责任限制</h3>
        <ul style="padding-left: 20px; margin: 10px 0;">
          <li>本工具仅保证技术功能的正常运行，不保证处理结果的准确性、完整性、适用性，你需自行核对处理结果；</li>
          <li>因使用本工具处理违规、违法文本导致的一切法律责任，均由用户自行承担，本工具站不承担任何连带责任；</li>
          <li>因网络故障、浏览器兼容、设备问题等非本工具站原因导致的功能异常，本工具站不承担赔偿责任。</li>
        </ul>

        <h3 style="color: #2563eb; margin: 15px 0;">3. 第三方链接</h3>
        <p>本工具站可能包含指向第三方网站的链接（如 GitHub），我们不对第三方网站的内容、隐私政策、安全性负责。</p>

        <h3 style="color: #2563eb; margin: 15px 0;">4. 免责声明效力</h3>
        <p>本免责声明适用于所有使用本工具站的用户，继续使用本工具视为接受本免责声明的全部条款。如你不同意本声明，请勿使用本工具。</p>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

// 免责声明页SEO配置
useHead({
  title: '免责声明 - 极简文本工具站 | 仅提供技术服务 无连带责任',
  meta: [
    { 
      name: 'keywords', 
      content: '免责声明,文本工具站免责,技术服务,责任限制' 
    },
    { 
      name: 'description', 
      content: '极简文本工具站免责声明：仅提供技术文本处理服务，不承担结果准确性、用户违规使用等连带责任。' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>

<style scoped>
@media (max-width: 768px) {
  .disclaimer-container {
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