<template>
  <div id="app">
    <el-row>
      <h3>操作</h3>
      <el-button @click="globalChange">全局变量修改样式</el-button>
      <el-button @click="injectChange">注入函数修改样式</el-button>
    </el-row>
    <el-row>
      <h3>全局变量修改的按钮展示</h3>
      <button class="global-class" :style="`background: ${color}`">按钮1</button>
      <button class="global-class" :style="`background: ${color}`">按钮2</button>
    </el-row>
    <el-row>
      <h3>注入函数修改的按钮展示</h3>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Row } from 'element-ui'
import { changeColor } from './util'
Vue.use(Button).use(Row)

export default {
  name: 'App',
  data () {
    return {
      color: ''
    }
  },
  methods: {
    globalChange () {
      this.color = this.$root.color
    },
    injectChange () {
      changeColor()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.global-class {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #DCDFE6;
  border-color: #DCDFE6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
