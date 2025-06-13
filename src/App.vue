<template>
  <div :class="theme.dark ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-gray-50 min-h-screen'">
    <Header />
    <main class="pt-50 overflow-x-hidden">
    <Hero />
    <Project />
    </main>

  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import { useThemeStore } from '@/stores/toggle'
import Project from './components/Project.vue'
const theme = useThemeStore()
</script>