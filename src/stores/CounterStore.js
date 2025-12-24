import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // data
  state() {
    return {
      count: 0
    }
  },
  // methods
  actions: {
    increment() {
      if (this.count >= 10) return
      this.count++
    }
  },
  // computed properties
  getters: {
    remaining() {
      return 10 - this.count
    }
  },
  // lifecycle hooks

})
