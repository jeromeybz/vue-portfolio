import { defineStore } from 'pinia'

export const useThemeStore = defineStore('toggle', {
  state: () => ({
    dark: false,
  }),
  actions: {
    toggleDark() {
      this.dark = !this.dark
    },
    goToBybit() {
      window.open('https://www.bybit.com/invite?ref=WNL5R1', '_blank')
    },
  },
})