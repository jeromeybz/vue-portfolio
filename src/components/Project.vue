<template>
  <section id="projects" class="w-full py-16 px-2 md:px-16 lg:px-32 xl:px-80">
    <p class="text-center font-bold" style="color: #42b883;">Tritrip</p>

    <h2 class="text-4xl font-bold mb-10 text-center" style="color: #42b883;">Projects</h2>
    <div class="flex justify-center">
      <div class="flex flex-wrap gap-12 justify-center">
        <div
          v-for="(project, pIdx) in projectStore.projects"
          :key="pIdx"
          class="flex flex-col bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-2xl"
        >
          <div class="relative flex justify-center">
            <img  
              :src="project.images[project.currentImage]"
              alt="Project Image"
              class="w-full h-[18rem] object-cover rounded-xl mb-6 cursor-pointer"
              @click="projectStore.openModal(pIdx, project.currentImage)"
            />
            <button
              v-if="project.images.length > 1"
              @click="projectStore.prevImage(pIdx)"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 text-xl"
            >&lt;</button>
            <button
              v-if="project.images.length > 1"
              @click="projectStore.nextImage(pIdx)"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 text-xl"
            >&gt;</button>
          </div>
          <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ project.title }}</h3>
          <p class="text-gray-600 text-base mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-2">
            <span v-for="(tech, i) in project.tech" :key="i" class="px-3 py-1 rounded bg-gray-100 text-xs font-mono border">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="projectStore.modal.open"
      class="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
      @click.self="projectStore.closeModal"
    >
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full flex flex-col items-center relative shadow-2xl">
        <button
          @click="projectStore.closeModal"
          class="absolute top-3 right-5 w-5 h-5 flex items-center justify-center rounded-full bg-[#42b883] text-white text-lg hover:bg-[#36996a] transition"
          aria-label="Close"
        >
          ×
        </button>
        <div class="relative w-full flex flex-col items-center">
          <img
            :src="projectStore.projects[projectStore.modal.projectIdx].images[projectStore.modal.imageIdx]"
            alt="Large Project Image"
            class="max-h-[60vh] w-auto rounded-xl mb-6"
          />
          <button
            v-if="projectStore.projects[projectStore.modal.projectIdx].images.length > 1"
            @click.stop="projectStore.prevModalImage"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 text-xl"
          >&lt;</button>
          <button
            v-if="projectStore.projects[projectStore.modal.projectIdx].images.length > 1"
            @click.stop="projectStore.nextModalImage"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full px-3 py-1 text-xl"
          >&gt;</button>
        </div>
        <p class="text-gray-700 text-center mb-6 text-lg">
          {{ projectStore.projects[projectStore.modal.projectIdx].description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useProjectStore } from '@/stores/project'
const projectStore = useProjectStore()
</script>