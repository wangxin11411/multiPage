<template>
  <dl v-if="navData.meta.authority" class="sideNav">
    <dt>{{navData.meta.name}}</dt>
    <dd v-for="citem in filterAuthority(navData.children)" :key="citem.meta.name">
      <side-navigation  v-if="citem.children && citem.children.length !== 0" :navData="citem"></side-navigation>
      <router-link v-else  :to="{path:citem.path}">{{citem.meta.name}}</router-link>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'sideNavigation',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  props: {
    navData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    filterAuthority(list) {
      return list.filter(item => item.meta.authority);
    }
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sideNav {
  text-align: left;
  font-size: 14px;
}

.sideNav dt {
  font-weight: 700;
  font-size: 16px;
}
.sideNav dd {
  padding-left: 10px;
}
.sideNav dd dt {
  font-size: 14px;
}
</style>
