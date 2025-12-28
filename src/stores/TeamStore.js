import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  // data
  state: () => ({
    name: '',
    spots: 0,
    members: []
  }),

  // methods (change the state)
  actions: {
    async fill() {
      const team = await import('@/components/Teams/team.json')
      this.$state = team.default
    },
    modifySpots(spots) {
      this.spots = spots
    }
  },
  // computed properties (don't change the state)
  getters: {
    remaining() {
      return this.spots - this.members.length
    },
    isFull() {
      return this.remaining === 0
    },
    disabled() {
      return this.isFull
    }
  },
  // lifecycle hooks (don't change the state)

})
