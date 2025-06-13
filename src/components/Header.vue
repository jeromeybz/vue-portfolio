<template>
  <header class="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-12 lg:px-24 xl:px-72 py-2 bg-white shadow z-50">
    <!-- Left: Logo -->
    <div class="text-xl font-bold text-blue-600 flex items-center">
      <button
        @click="theme.goToBybit"
        class="focus:outline-none"
        aria-label="Go to Bybit"
        style="background: none; border: none; padding: 0; margin: 0;"
      >
        <img src="@/assets/10728628.png" alt="Logo" class="w-8 h-8 sm:w-6 sm:h-7" />
      </button>
    </div>

    <!-- Right: Toggle Button with Navigation -->
    <div class="flex items-center space-x-4">
<!-- Replace scrollToSection and isActiveSection with header.scrollToSection and header.isActiveSection -->
      <button
        @click="header.scrollToSection('hero')"
        :class="[
          'font-bold mb-1 text-center transition-colors duration-200',
          header.isActiveSection('hero') ? 'underline decoration-7.5 decoration-[#42b883]' : '',
          'hover:underline hover:decoration-4 hover:decoration-[#42b883]'
        ]"
        style="color: #42b883;"
      >
        Home
      </button>
      <button
        @click="header.scrollToSection('projects')"
        :class="[
          'font-bold mb-1 text-center transition-colors duration-200',
          header.isActiveSection('projects') ? 'underline decoration-7.5 decoration-[#42b883]' : '',
          'hover:underline hover:decoration-4 hover:decoration-[#42b883]'
        ]"
        style="color: #42b883;"
      >
        Projects
      </button>
      <button
        @click="theme.toggleDark"
        class="ml-2 px-2 py-1 rounded bg-white-200 hover:bg-white-300 text-xl"
        aria-label="Toggle Dark Mode"
        :title="theme.dark ? 'PIñA Dark mode' : 'PIñA Light mode'"
      >
        🍍{{ theme.dark ? '🌙' : '☀️' }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useThemeStore } from '@/stores/toggle'
import { useHeaderStore } from '@/stores/header'

const theme = useThemeStore()
const header = useHeaderStore()

onMounted(() => {
  header.setupScrollListener()
})
onUnmounted(() => {
  header.removeScrollListener()
})
</script>