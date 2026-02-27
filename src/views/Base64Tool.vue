<template>
  <div class="base64-container" style="max-width: 1200px; margin: 30px auto; padding: 0 20px;">
    <el-page-header content="Base64 加解密" @back="$router.push('/')"></el-page-header>
    
    <el-card shadow="hover" style="margin: 15px 0; background: #f8fafc; padding: 10px; border-radius: 6px;">
      <p style="margin: 0; color: #475569; font-size: 13px; line-height: 1.5;">
        📌 所有Base64处理均在<strong>本地浏览器</strong>完成，无数据上传至服务器 | 
        <a href="/disclaimer" style="color: #2563eb; text-decoration: none;">使用须知</a> | 
        <a href="/privacy" style="color: #2563eb; text-decoration: none;">隐私政策</a>
      </p>
    </el-card>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="输入文本">
          <el-input
            type="textarea"
            v-model="inputText"
            :rows="15"
            placeholder="输入文本进行加密/解密"
            style="width: 100%;"
          ></el-input>
          <el-button-group style="margin-top: 10px;">
            <el-button type="primary" @click="encode">加密</el-button>
            <el-button type="warning" @click="decode">解密</el-button>
            <el-button type="default" @click="clearAll">清空</el-button>
          </el-button-group>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="结果">
          <el-input
            type="textarea"
            v-model="outputText"
            :rows="15"
            readonly
            style="width: 100%;"
            :class="{ 'err': isError }"
          ></el-input>
          <el-button 
            type="success" 
            style="margin-top: 10px;"
            @click="copy"
            v-if="outputText && !isError"
          >
            复制
          </el-button>
        </el-card>
      </el-col>
    </el-row>

    <div style="text-align: center; margin-top: 25px; color: #64748b; font-size: 12px;">
      © 2026 极简文本工具站 | <a href="/privacy" style="color: #2563eb; text-decoration: none;">隐私</a> | <a href="/disclaimer" style="color: #2563eb; text-decoration: none;">免责</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Base64加解密工具 - 本地处理 | 极简文本工具站',
  meta: [
    { name: 'keywords', content: 'Base64加密,Base64解密,在线Base64工具' },
    { name: 'description', content: 'Base64加密解密工具，本地处理，安全免费无广告' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

const inputText = ref('')
const outputText = ref('')
const isError = ref(false)

const encode = () => {
  const val = inputText.value.trim()
  if (!val) return ElMessage.warning('请输入内容')
  try {
    outputText.value = btoa(unescape(encodeURIComponent(val)))
    isError.value = false
    ElMessage.success('加密成功')
  } catch (e) {
    outputText.value = '加密失败'
    isError.value = true
    ElMessage.error('加密失败')
  }
}

const decode = () => {
  const val = inputText.value.trim()
  if (!val) return ElMessage.warning('请输入内容')
  try {
    outputText.value = decodeURIComponent(escape(atob(val)))
    isError.value = false
    ElMessage.success('解密成功')
  } catch (e) {
    outputText.value = '解密失败'
    isError.value = true
    ElMessage.error('不是合法的Base64')
  }
}

const clearAll = () => {
  inputText.value = ''
  outputText.value = ''
  isError.value = false
  ElMessage.info('已清空')
}

const copy = () => {
  navigator.clipboard.writeText(outputText.value)
    .then(() => ElMessage.success('复制成功'))
    .catch(() => ElMessage.error('复制失败'))
}
</script>

<style scoped>
.err { color: #f56c6c; }
@media (max-width: 768px) {
  .base64-container { margin: 15px auto; padding: 0 12px; }
}
</style>