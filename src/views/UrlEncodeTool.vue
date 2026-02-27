<template>
  <div class="url-container" style="max-width: 1200px; margin: 30px auto; padding: 0 20px;">
    <el-page-header content="URL 编码/解码" @back="$router.push('/')"></el-page-header>
    
    <el-card shadow="hover" style="margin: 15px 0; background: #f8fafc; padding: 10px; border-radius: 6px;">
      <p style="margin: 0; color: #475569; font-size: 13px; line-height: 1.5;">
        📌 所有URL处理均在<strong>本地浏览器</strong>完成，无数据上传至服务器 | 
        <a href="/disclaimer" style="color: #2563eb; text-decoration: none;">使用须知</a> | 
        <a href="/privacy" style="color: #2563eb; text-decoration: none;">隐私政策</a>
      </p>
    </el-card>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="输入URL/文本">
          <el-input
            type="textarea"
            v-model="inputText"
            :rows="15"
            placeholder="输入需要编码或解码的内容"
            style="width: 100%;"
          ></el-input>
          <el-button-group style="margin-top: 10px;">
            <el-button type="primary" @click="encode">URL编码</el-button>
            <el-button type="warning" @click="decode">URL解码</el-button>
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
  title: 'URL编码解码工具 - 本地处理 | 极简文本工具站',
  meta: [
    { name: 'keywords', content: 'URL编码,URL解码,URL转码,在线URL工具' },
    { name: 'description', content: 'URL编码解码工具，支持中文转码，本地处理安全免费' },
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
    outputText.value = encodeURIComponent(val)
    isError.value = false
    ElMessage.success('编码成功')
  } catch (e) {
    outputText.value = '编码失败'
    isError.value = true
    ElMessage.error('编码失败')
  }
}

const decode = () => {
  const val = inputText.value.trim()
  if (!val) return ElMessage.warning('请输入内容')
  try {
    outputText.value = decodeURIComponent(val)
    isError.value = false
    ElMessage.success('解码成功')
  } catch (e) {
    outputText.value = '解码失败'
    isError.value = true
    ElMessage.error('不是合法的URL编码')
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
  .url-container { margin: 15px auto; padding: 0 12px; }
}
</style>