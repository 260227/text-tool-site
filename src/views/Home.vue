<template>
  <div class="home-container" style="max-width: 800px; margin: 0 auto; padding: 0 15px;">
    <!-- 头部 Logo + 标题 -->
    <div style="text-align: center; padding: 30px 0 20px;">
      <!-- 替换为你的 SVG Logo -->
      <svg width="80" height="80" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="margin-bottom: 15px;">
        <rect x="5" y="5" width="90" height="90" rx="6" fill="#f1f5f9" stroke="#2563eb" stroke-width="1.5"/>
        <rect x="15" y="30" width="70" height="4" rx="2" fill="#2563eb"/>
        <rect x="15" y="40" width="60" height="4" rx="2" fill="#2563eb"/>
        <rect x="15" y="50" width="75" height="4" rx="2" fill="#2563eb"/>
        <rect x="15" y="60" width="55" height="4" rx="2" fill="#2563eb"/>
        <circle cx="80" cy="45" r="6" fill="#fff" stroke="#2563eb" stroke-width="1.5"/>
        <path d="M78 42 L82 48 M82 42 L78 48" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <h2 style="margin: 0; color: #1e293b; font-size: 24px;">极简文本工具站</h2>
    </div>

    <!-- 核心功能按钮（移动端适配） -->
    <el-card shadow="hover" style="margin-bottom: 30px;">
      <el-row :gutter="15" :xs="1" :sm="2" :md="4">
        <!-- xs: 手机端1列，sm: 平板2列，md: 电脑4列 -->
        <el-col :xs="24" :sm="12" :md="6" style="margin-bottom: 10px;">
          <el-button 
            type="primary" 
            size="large" 
            style="width: 100%; padding: 18px 0;"
            @click="$router.push('/json-formatter')"
          >
            JSON 格式化
          </el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" style="margin-bottom: 10px;">
          <el-button 
            type="primary" 
            size="large" 
            style="width: 100%; padding: 18px 0;"
            @click="$router.push('/text-deduplicate')"
          >
            文本去重
          </el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" style="margin-bottom: 10px;">
          <el-button 
            type="primary" 
            size="large" 
            style="width: 100%; padding: 18px 0;"
            @click="$router.push('/base64-tool')"
          >
            Base64 加解密
          </el-button>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" style="margin-bottom: 10px;">
          <el-button 
            type="primary" 
            size="large" 
            style="width: 100%; padding: 18px 0;"
            @click="$router.push('/url-encode-tool')"
          >
            URL 转码
          </el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- 数据安全说明（商用必备） -->
    <el-card shadow="hover" style="margin-bottom: 20px; background: #f8fafc;">
      <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
        📌 所有文本处理均在<strong>本地浏览器</strong>完成，无数据上传至服务器，保障你的信息安全。
      </p>
    </el-card>

    <!-- 盈利入口 + 合规声明（商用核心） -->
    <div style="text-align: center; padding: 20px 0; color: #64748b; font-size: 13px;">
      <!-- 捐赠/赞助入口 -->
      <div style="margin-bottom: 15px;">
        <el-button 
          type="default" 
          size="small" 
          @click="openSponsor"
          style="margin-right: 10px;"
        >
          💰 支持我们
        </el-button>
        <el-button 
          type="default" 
          size="small" 
          @click="openGithub"
        >
          🐙 GitHub 源码
        </el-button>
      </div>
      
      <!-- 版权 + 合规链接 -->
      <p style="margin: 5px 0;">© 2026 极简文本工具站 - 保留所有权利</p>
      <p style="margin: 5px 0;">
        <a href="/privacy" style="color: #2563eb; text-decoration: none; margin: 0 5px;">隐私政策</a>
        <a href="/disclaimer" style="color: #2563eb; text-decoration: none; margin: 0 5px;">免责声明</a>
        <a href="/license" style="color: #2563eb; text-decoration: none; margin: 0 5px;">使用许可</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head'

// 首页SEO配置（强化商用关键词）
useHead({
  title: '极简文本工具站 - 免费JSON格式化/文本去重/Base64加解密/URL转码 | 无广告可商用',
  meta: [
    { 
      name: 'keywords', 
      content: '文本工具站,JSON格式化,文本去重,Base64加解密,URL转码,免费在线文本工具,开发者工具,无广告,本地处理' 
    },
    { 
      name: 'description', 
      content: '极简文本工具站，免费提供JSON格式化、文本去重、Base64加解密、URL转码等在线工具，所有处理本地完成，无广告、无需注册，开发者必备，可放心商用！' 
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
    // 商用必备：百度/谷歌收录优化
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: '极简文本工具站 - 免费无广告的文本处理工具' },
    { property: 'og:description', content: '本地处理的文本工具站，支持JSON格式化、文本去重等，无广告、可商用！' }
  ]
})

// 盈利入口：打开赞助页面（替换为你的GitHub Sponsors/爱发电链接）
const openSponsor = () => {
  window.open('https://github.com/sponsors/260227', '_blank')
}

// 打开GitHub仓库（替换为你的仓库地址）
const openGithub = () => {
  window.open('https://github.com/260227/text-tool-site', '_blank')
}
</script>

<style scoped>
/* 移动端适配优化 */
@media (max-width: 768px) {
  .home-container {
    padding: 0 10px !important;
  }
  h2 {
    font-size: 20px !important;
  }
  .el-button {
    font-size: 14px !important;
  }
}
</style>