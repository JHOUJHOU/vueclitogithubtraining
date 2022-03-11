<template>
  <h1>單一產品頁面</h1>
  {{ product }}
</template>

<script>
export default {
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    // 取得遠端資源
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`)
      .then((res) => {
        console.log(res);
        this.product = res.data.product;
      })
      .catch((err) => {
        console.dir(err);
      });
  },
};
</script>
