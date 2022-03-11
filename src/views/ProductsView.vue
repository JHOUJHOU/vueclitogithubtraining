<template>
    <h1>產品列表</h1>
    <table class="table">
      <thead>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td><img :src="item.imageUrl" height="100" alt=""></td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td><router-link :to="`/product/${item.id}`">單一頁面</router-link></td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    // 取得遠端資源
    this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
      .then((res) => {
        console.log(res);
        this.products = res.data.products;
      })
      .catch((err) => {
        console.dir(err);
      });
  },
};
</script>
