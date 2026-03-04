<template>
  <section id="projects" class="w-full py-16 px-2 md:px-16 lg:px-32 xl:px-80">
    <p class="text-center font-bold" style="color: #42b883;">Tritrip</p>

    <h2 class="text-4xl font-bold mb-10 text-center" style="color: #42b883;">Projects</h2>
    
    <div class="flex justify-center">
      <div class="flex flex-wrap gap-12 justify-center">
        <div
          v-for="(project, pIdx) in projectStore.projects"
          :key="pIdx"
          class="flex flex-col bg-white rounded-2xl shadow-xl border-2 border-green-600 p-8 w-full max-w-2xl"
        >
          <div class="relative flex justify-center">
            <img  
              :src="project.images[project.currentImage]"
              alt="Project Image"
              class="w-full h-48 sm:h-[18rem] object-cover rounded-xl mb-6 cursor-pointer"
              @click="projectStore.openModal(pIdx, project.currentImage)"
              style="background: #f3f4f6;"
            />
            <button
              v-if="project.images.length > 1"
              @click="projectStore.prevImage(pIdx)"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 transition rounded-full px-3 py-1 text-xl"
            >&lt;</button>
            <button
              v-if="project.images.length > 1"
              @click="projectStore.nextImage(pIdx)"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 transition rounded-full px-3 py-1 text-xl"
            >&gt;</button>
          </div>

          <h3 class="text-xl font-semibold text-gray-800 mb-3">{{ project.title }}</h3>
          <p class="text-gray-600 text-base mb-4">{{ project.description }}</p>
          
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="(tech, i) in project.tech"
              :key="i"
              class="px-3 py-1 rounded bg-gray-100 text-xs font-mono border border-gray-300"
              :class="{
                'text-black bg-gray-100': !theme?.dark,
                'text-black bg-white': theme?.dark
              }"
            >
              {{ tech }}
            </span>
          </div>

          <div class="mt-auto flex flex-col sm:flex-row gap-2">
            <a 
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1 px-1 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-all active:scale-95 shadow-md w-full sm:w-max"
            >
              <svg class="w-5 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              Code & Documentation
            </a>
            <a
              v-if="project.dashboardUrl"
              :href="project.dashboardUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-lg bg-[#42b883] text-white text-sm font-medium hover:bg-[#36996a] transition-all active:scale-95 shadow-md w-full sm:w-max"
            >
              {{ project.Title || 'Visit Dashboard' }}
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="projectStore.modal.open"
      class="fixed inset-0 backdrop-blur-sm bg-black/20 flex items-center justify-center z-50"
      @click.self="projectStore.closeModal"
    >
      <div class="bg-white rounded-2xl p-8 max-w-2xl w-full flex flex-col items-center relative shadow-2xl m-4">
        <button
          @click="projectStore.closeModal"
          class="absolute top-0.5 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-[#42b883] text-white text-xl hover:bg-[#36996a] transition"
          aria-label="Close"
        >
          ×
        </button>
        <div class="relative w-full flex flex-col items-center">
          <img
            :src="projectStore.projects[projectStore.modal.projectIdx].images[projectStore.modal.imageIdx]"
            alt="Large Project Image"
            class="w-full max-h-[60vh] object-contain rounded-xl mb-6"
          />
          <button
            v-if="projectStore.projects[projectStore.modal.projectIdx].images.length > 1"
            @click.stop="projectStore.prevModalImage"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-xl"
          >&lt;</button>
          <button
            v-if="projectStore.projects[projectStore.modal.projectIdx].images.length > 1"
            @click.stop="projectStore.nextModalImage"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 text-xl"
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