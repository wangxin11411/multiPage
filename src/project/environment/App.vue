<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
html,
body {
  height: 100%;
  overflow: hidden;
}
#app {
  box-sizing: border-box;
  height: 100%;
  padding: 100px 0;
}
</style>
