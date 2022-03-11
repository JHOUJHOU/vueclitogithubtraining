<template>
  <router-view/>
  {{ name }}
</template>

<style lang="scss">
@import 'bootstrap';
</style>

<script>
export default {
  data() {
    return {
      name: process.env.VUE_APP_NAME,
    };
  },
};
</script>
