import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory("/taste_nft/"),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('@/pages/MainPage.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/pages/AccountPage.vue')
    },
    {
      path: '/auction/:id',
      name: 'auction',
      component: () => import('@/pages/AuctionPage.vue')
    },
    {
      path: '/creator',
      name: 'creator',
      component: () => import('@/pages/CreatorPage.vue')
    }
  ]
})

export default router
