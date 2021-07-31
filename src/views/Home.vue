<template>
  <div class="list">
    <div
      class="listItem"
      v-for="(item, index) in list"
      :key="index"
    >
      {{ item.name }}
    </div>
    <p>hello wep</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { name: 'vue-cli4脚手架' },
        { name: 'vant按需引入 aaa test shell' },
        // { name: '移动端rem适配' },
        // { name: 'axios拦截封装' },
        // { name: 'util工具类函数封装' },
        // { name: 'vue-router配置' },
        // { name: '登录权限校验' },
        // { name: '多环境变量配置' },
        // { name: 'vue.config.js配置' },
        // { name: 'toast组件封装' },
        // { name: 'dialog组件封装' },
        // { name: '跨域代理设置' },
        // { name: 'webpack打包可视化分析' },
        // { name: 'CDN资源优化' },
        // { name: 'gzip打包优化' },
        // { name: '首页添加骨架屏' }
      ]
    }
  },
  mounted() {
    this.$loading.show({tip:'拼命加载中'});

    setTimeout(()=> {
        this.$loading.hide();
    }, 1500);

    console.log(this.util.getUrlParams('id'));
    console.log(this.util.testMobileType());


    // this.$toast({
    //   msg: '提示文案',
    //   type: 'loading'
    // })

    // this.$dialog({
    //   title: '流程结束',
    //   text: '您未开启下节点处理，确定后审批流程结束，不需要下节点处理人操作！',
    //   type: 'input',
    //   placeholder: '请输入内容文本...',
    //   length: 10,
    //   showCancelBtn: false,
    //   confirmText: '确认',
    //   confirm() {}
    // })
  }
}
</script>

<style scoped lang="less">
.list {
  height: 100%;
  width: 100%;
  .listItem {
    width: 100%;
    padding: 0 15px;
    height: 45px;
    line-height: 45px;
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
}
</style>
