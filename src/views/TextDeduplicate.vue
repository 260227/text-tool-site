<template>
  <div class="text-container" style="max-width: 1200px; margin: 30px auto; padding: 0 20px;">
    <el-page-header content="文本去重（按行）" @back="$router.push('/')"></el-page-header>
    
    <el-card shadow="hover" style="margin: 15px 0; background: #f8fafc; padding: 10px; border-radius: 6px;">
      <p style="margin: 0; color: #475569; font-size: 13px; line-height: 1.5;">
        📌 所有文本去重均在<strong>本地浏览器</strong>完成，无数据上传至服务器 | 
        <a href="/disclaimer" style="color: #2563eb; text-decoration: none;">使用须知</a> | 
        <a href="/privacy" style="color: #2563eb; text-decoration: none;">隐私政策</a>
      </p>
    </el-card>

    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="输入文本（按行分隔）">
          <el-input
            type="textarea"
            v-model="inputText"
            :rows="15"
            placeholder="一行一条内容，去重保留首次出现顺序"
            style="width: 100%;"
          ></el-input>
          <el-button-group style="margin-top: 10px;">
            <el-button type="primary" @click="deduplicate">去重</el-button>
            <el-button type="warning" @click="clearAll">清空</el-button>
          </el-button-group>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" style="margin-top: 20px;">
        <el-card header="去重结果">
          <el-input
            type="textarea"
            v-model="outputText"
            :rows="15"
            readonly
            style="width: 100%;"
          ></el-input>
          <el-button 
            type="success" 
            style="margin-top: 10px;"
            @click="copyResult"
            v-if="outputText"
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
  title: '文本去重工具 - 按行去重 本地处理 | 极简文本工具站',
  meta: [
    { name: 'keywords', content: '文本去重,按行去重,文本清理,在线去重工具' },
    { name: 'description', content: '在线文本去重，按行去重，保留顺序，本地处理不上传，安全免费' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})

const inputText = ref('')
const outputText = ref('')

const deduplicate = () => {
  const val = inputText.value.trim()
  if (!val) {
    ElMessage.warning('请输入文本')
    return
  }
  const lines = val.split(/\n/).filter(i => i.trim())
  const unique = [...new Set(lines.map(i => i.trim()))]
  outputText.value = unique.join('\n')
  ElMessage.success(`去重完成：原${lines.length}行 → 现${unique.length}行`)
}

const clearAll = () => {
  inputText.value = ''
  outputText.value = ''
  ElMessage.info('已清空')
}

const copyResult = () => {
  navigator.clipboard.writeText(outputText.value)
    .then(() => ElMessage.success('复制成功'))
    .catch(() => ElMessage.error('复制失败'))
}
</script>

<style scoped>
@media (max-width: 768px) {
  .text-container { margin: 15px auto; padding: 0 12px; }
}
</style>