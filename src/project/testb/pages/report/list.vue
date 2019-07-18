<template>
  <div>
    评估报告列表页
    <a-button type="danger">Danger</a-button>
    <a-pagination type="danger" v-model="current" :total="50"></a-pagination>
  </div>
</template>

<script>
export default {
  name: 'reportList',
  data() {
    return {
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
<style scoped>
</style>
