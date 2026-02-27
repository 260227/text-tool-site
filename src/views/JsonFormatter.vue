<template>
  <div class="json-tool-container" style="max-width: 1200px; margin: 30px auto; padding: 0 20px;">
    <el-page-header content="JSON 格式化/校验" @back="$router.push('/')"></el-page-header>
    
    <!-- 合规提示 -->
    <el-card shadow="hover" style="margin: 15px 0; background: #f8fafc; padding: 10px; border-radius: 6px;">
      <p style="margin: 0; color: #475569; font-size: 13px; line-height: 1.5;">
        📌 所有JSON处理均在<strong>本地浏览器</strong>完成，无数据上传至服务器 | 
        <a href="/disclaimer" style="color: #2563eb; text-decoration: none;">使用须知</a> | 
        <a href="/privacy" style="color: #2563eb; text-decoration: none;">隐私政策</a>
      </p>
    </el-card>

    <!-- 优雅响应式：手机单列、电脑双列 -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="输入 JSON 文本">
          <el-input
            type="textarea"
            v-model="inputText"
            :rows="15"
            placeholder="请输入需要格式化/校验的 JSON 文本..."
            style="width: 100%;"
          ></el-input>
          <el-button-group style="margin-top: 10px;">
            <el-button type="primary" @click="formatJson">格式化</el-button>
            <el-button type="warning" @click="clearInput">清空</el-button>
          </el-button-group>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="输出结果">
          <el-input
            type="textarea"
            v-model="outputText"
            :rows="15"
            readonly
            style="width: 100%;"
            :class="{ 'error-text': isError }"
          ></el-input>
          <el-button 
            type="success" 
            style="margin-top: 10px;"
            @click="copyOutput"
            v-if="outputText && !isError"
          >
            复制结果
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
  title: 'JSON格式化工具 - 本地处理 免费无广告 | 极简文本工具站',
  meta: [
    { name: 'keywords', content: 'JSON格式化,JSON校验,本地处理,免费JSON工具,无广告' },
    { name: 'description', content: 'JSON格式化工具，本地处理无需上传，免费无广告，一键校验格式化' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

const inputText = ref('')
const outputText = ref('')
const isError = ref(false)

const formatJson = () => {
  const val = inputText.value.trim()
  if (!val) {
    ElMessage.warning('请输入JSON内容')
    return
  }
  try {
    const obj = JSON.parse(val)
    outputText.value = JSON.stringify(obj, null, 2)
    isError.value = false
    ElMessage.success('格式化成功')
  } catch (e) {
    outputText.value = 'JSON格式错误：' + e.message
    isError.value = true
    ElMessage.error('格式不正确，请检查')
  }
}

const clearInput = () => {
  inputText.value = ''
  outputText.value = ''
  isError.value = false
  ElMessage.info('已清空')
}

const copyOutput = () => {
  navigator.clipboard.writeText(outputText.value)
    .then(() => ElMessage.success('复制成功'))
    .catch(() => ElMessage.error('复制失败'))
}
</script>

<style scoped>
.error-text { color: #f56c6c; }
@media (max-width: 768px) {
  .json-tool-container { margin: 15px auto; padding: 0 12px; }
}
</style>