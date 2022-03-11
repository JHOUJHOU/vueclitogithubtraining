<template>
    <h2>登入頁面</h2>
    <button type="button" @click="login">登入</button>
</template>

<script>
export default {
  methods: {
    login() {
      console.log(this.$router);
      // $router(方法)、$route(取得參數)
      // 使用 push 方法
      this.$router.push('/admin/products');
    },
  },
};
</script>
