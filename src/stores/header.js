import { defineStore } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'

export const useHeaderStore = defineStore('header', () => {
  const activeSection = ref('hero')

  function onScroll() {
    const hero = document.getElementById('hero')
    const projects = document.getElementById('projects')
    const scrollY = window.scrollY + 80 // adjust for header height

    if (projects && scrollY >= projects.offsetTop - 10) {
      activeSection.value = 'projects'
    } else {
      activeSection.value = 'hero'
    }
  }

  function isActiveSection(section) {
    return activeSection.value === section
  }

  function scrollToSection(sectionId) {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function setupScrollListener() {
    window.addEventListener('scroll', onScroll)
    onScroll()
  }

  function removeScrollListener() {
    window.removeEventListener('scroll', onScroll)
  }

  return {
    activeSection,
    isActiveSection,
    scrollToSection,
    setupScrollListener,
    removeScrollListener,
  }
})