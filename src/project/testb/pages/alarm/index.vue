<template>
  <div>
    报警记录主页
    <hello></hello>
  </div>
</template>

<script>
import hello from '@/components/HelloWorld.vue';

export default {
  name: 'alarmIndex',
  components: { hello },
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
