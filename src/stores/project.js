import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([
    {
      title: "Sentiment Analysis",
      description: "A Sentiment Analysis project that used an experimental method to analyze text data and modeled it using different machine learning models.",
      images: [
        new URL('@/assets/nposition.png', import.meta.url).href,
        new URL('@/assets/combi.png', import.meta.url).href
      ],
      currentImage: 0,
      tech: ['Python', 'ML', 'NLP'],
    },
    {
      title: "Attendash",
      description: "A simple web based application that monitors Employee Attendance.",
      images: [
        new URL('@/assets/attendash.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['Python', 'Streamlit'],
    },
    {
      title: "HappyFeet",
      description: "An ecommerce website that sells Footwear",
      images: [
        new URL('@/assets/happyfeet.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['PHP', 'CSS', 'MySQL'],
    },
  ])

  const modal = ref({
    open: false,
    projectIdx: 0,
    imageIdx: 0,
  })

  function nextImage(idx) {
    const project = projects.value[idx]
    project.currentImage = (project.currentImage + 1) % project.images.length
  }

  function prevImage(idx) {
    const project = projects.value[idx]
    project.currentImage = (project.currentImage - 1 + project.images.length) % project.images.length
  }

  function openModal(projectIdx, imageIdx) {
    modal.value.projectIdx = projectIdx
    modal.value.imageIdx = imageIdx
    modal.value.open = true
  }

  function closeModal() {
    modal.value.open = false
  }

  function nextModalImage() {
    const images = projects.value[modal.value.projectIdx].images
    modal.value.imageIdx = (modal.value.imageIdx + 1) % images.length
  }

  function prevModalImage() {
    const images = projects.value[modal.value.projectIdx].images
    modal.value.imageIdx = (modal.value.imageIdx - 1 + images.length) % images.length
  }

  return {
    projects,
    modal,
    nextImage,
    prevImage,
    openModal,
    closeModal,
    nextModalImage,
    prevModalImage,
  }
})