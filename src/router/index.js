import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'products', // 產品列表
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'product/:id', // 單一產品頁面 :動態參數
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'login', // 登入
        component: () => import('../views/LoginView.vue'),
        children: [
          {
            path: 'cart', // 購物車
            component: () => import('../views/CartView.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/admin', // 後台
    component: () => import('../views/DashboardView.vue'),
    // 巢狀結構
    children: [
      {
        path: 'products', // 後台產品列表
        component: () => import('../views/AdminProducts.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
