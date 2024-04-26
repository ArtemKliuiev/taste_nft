// stores/counter.js
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('searchInfo', {
  state: () => {
    return { search: '' }
  }
})

export const useVideoStore = defineStore('video', {
  state: () => {
    return { video: 'https://www.youtube.com/embed/6xYdVpzDOPg?si=8EEA50jLR8vvhTNt' }
  }
})

export const useOpenVideoModalStore = defineStore('openVideo', {
  state: () => {
    return { value: false }
  }
})

export const useToastStore = defineStore('toast', {
  state: () => {
    return {
      info: {
        text: '',
        current: 0
      }
    }
  }
})
