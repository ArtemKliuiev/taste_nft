import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/taste_nft/'),
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
      path: '/user/:id',
      name: 'user',
      component: () => import('@/pages/UserPage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/SearchPage.vue'),
      meta: { transition: 'search' }
    }
  ],
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  }
})

export default router
