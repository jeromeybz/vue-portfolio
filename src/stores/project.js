import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([

    {
      title: "End-to-end Data Analysis",
      description: "Filtering, and transforming specific business metrics from a normalized SQL Data Warehouse for optimized Power BI visualization",
      images: [
        new URL('@/assets/Simple Sales Dashboard.png', import.meta.url).href,

      ],
      currentImage: 0,
      tech: ['SQL Server', 'SQL', 'Power Query', 'Power BI'],
      githubUrl: "https://github.com/jeromeybz/EndToEnd_DA"
    },

    {
      title: "Google-Fibr-Cyclistic-Analysis",
      description: "End-to-end projects from the Google Business Intelligence Certificate using BigQuery and Tableau to transform raw cloud data into a dashboards.",
      images: [
        new URL('@/assets/dashboard1.png', import.meta.url).href,
        new URL('@/assets/dashbooard2.png', import.meta.url).href,
        new URL('@/assets/dashbooard2.png', import.meta.url).href,

        new URL('@/assets/dashboard1fbr.png', import.meta.url).href,
        new URL('@/assets/dashboard2fbr.png', import.meta.url).href,
        new URL('@/assets/dashboard3fbr.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['BigQuery', 'SQL', 'Tableau'],
      githubUrl: "https://github.com/jeromeybz/Google-Fibr-Cyclistic-Analysis"
    },


    {
      title: "Sentiment Analysis",
      description: "A Sentiment Analysis project that used an experimental method to train the text data and modeled it using different machine learning models.",
      images: [
        new URL('@/assets/nposition.png', import.meta.url).href,
        new URL('@/assets/combi.png', import.meta.url).href
      ],
      currentImage: 0,
      tech: ['Python', 'ML', 'NLP'],
    },


    //
    {
      title: "Data Analysis and Visualization",
      description: "Created a Data Visualization using Excel and Power BI. Gathered data from public datasets online and performed data cleaning and relationship management ",
      images: [
        new URL('@/assets/`m&toysupdated1.png', import.meta.url).href,
        new URL('@/assets/`m&toysupdated2.png', import.meta.url).href,
        new URL('@/assets/`m&toysupdated3.png', import.meta.url).href,
        new URL('@/assets/normalization_pbi.png', import.meta.url).href,

      ],
      currentImage: 0,
      tech: ['Excel', 'Power Query', 'Relationship Management', 'Power BI'],
      githubUrl: "https://github.com/jeromeybz/excel_powerBI"
    },

    //
        {
      title: "Excel, Power BI activities",
      description: "Finished activities involving data cleaning, analysis, and visualization using Excel and Power BI to produce basic reports and dashboards.",
      images: [
        new URL('@/assets/excel_act2.png', import.meta.url).href,
        new URL('@/assets/excel_act1.png', import.meta.url).href,
        new URL('@/assets/excel_act3.png', import.meta.url).href,
        new URL('@/assets/pb1_act1.png', import.meta.url).href,
        new URL('@/assets/pbi_act2.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['Excel', 'Power BI', 'Data Cleaning', 'Pivot Tables', 'Data Visualization'],
      githubUrl: "https://github.com/jeromeybz/excel_powerBI"

    },

    {
      title: "Attendash",
      description: "A simple web based application that monitors Employee Attendance.",
      images: [
        new URL('@/assets/attendash.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['Python', 'Streamlit', 'Excel'],
      githubUrl: "https://github.com/jeromeybz/attendash"

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