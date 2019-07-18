<template>
  <div>
    主页 在此获取身份信息<a-button type="danger">Danger</a-button>
    <a-pagination type="danger" v-model="current" :total="50"></a-pagination>
  </div>
</template>

<script>

export default {
  name: 'indexList',
  data() {
    return {
      current: 2,
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {
  },
  mounted() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
