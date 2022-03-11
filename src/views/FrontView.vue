<template>
    <h2>前台的畫面</h2>
    <nav>
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">前台產品列表</router-link> |
      <router-link to="/login">前台購物車</router-link> |
      <router-link to="/login">後台購物車列表</router-link> |

      <!-- 往後台 -->
      <router-link to="/admin/products">後台產品列表</router-link>

    </nav>
    <p>首頁</p>
    <router-view/>
</template>
