import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/HomePage.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Sales from '../views/Sales.vue';
import Product from '../views/Product.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  { path: '/cart', name: 'Cart', component: ShoppingCart },
  { path: '/product', name: 'Product', component: Product },
  { path: '/sales', name: 'Sales', component: Sales },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
