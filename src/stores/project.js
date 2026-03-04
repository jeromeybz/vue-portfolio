import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('project', () => {
  const projects = ref([

    {
      title: "End-to-end Data Analysis",
      description: "Extracted, filtered, and transformed specific business metrics from a SQL Data Warehouse into structured DataMarts for optimized Power BI visualization.",
      images: [
        new URL('@/assets/ADW.png', import.meta.url).href,

      ],
      currentImage: 0,
      tech: ['SQL Server', 'SQL', 'Data Modeling','Power Query', 'Power BI', 'Analysis Report'],
      githubUrl: "https://github.com/jeromeybz/End-to-end-DA",
      dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZDI0MWFkMTMtOTdlYS00YjQzLWExODAtNmNhNzExMDg5OTI1IiwidCI6IjdjZmY5YzA2LThmNGQtNDAwNi1iOWQwLWU4MWRjYWJjZDU1NyIsImMiOjEwfQ%3D%3D',
      Title: 'View Dashboard'
    },

    {
      title: "GoogleFibr & Cyclistic Analysis",
      description: "End-to-end projects from the Google Business Intelligence Certificate using BigQuery and Tableau to transform raw cloud data into a dashboards.",
      images: [
        new URL('@/assets/CYCLISTIC1.png', import.meta.url).href,
        new URL('@/assets/CYCLISTIC2.png', import.meta.url).href,
        new URL('@/assets/CYCLISTIC3.png', import.meta.url).href,

        new URL('@/assets/GOOGLEFIBR1.png', import.meta.url).href,
        new URL('@/assets/GOOGLEFIBR2.png', import.meta.url).href,
        new URL('@/assets/GOOGLEFIBR3.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['BigQuery', 'SQL', 'Tableau', 'Analysis Report'],
      githubUrl: "https://github.com/jeromeybz/GoogleFibr-Cyclistic-Analysis",
      dashboardUrl: 'https://public.tableau.com/app/profile/marc.jerome.colobong/viz/cyclistic_17723417749830/Home',
      Title: 'View Dashboard'
    },


    {
      title: "Sentiment Analysis",
      description: "A Sentiment Analysis project that used an experimental method to train the text data and modeled it using different machine learning models.",
      images: [
        new URL('@/assets/nposition.png', import.meta.url).href,
        new URL('@/assets/combi.png', import.meta.url).href,
        new URL('@/assets/heatmappic.png', import.meta.url).href
      ],
      currentImage: 0,
      tech: ['Python', 'Machine Learning', 'NLP', 'Parts of Speech Tagging'],
      githubUrl: "https://github.com/jeromeybz/Thesis"
    },


    //
    {
      title: "Maven Toys Analysis",
      // description: "Created a Data Visualization using Excel and Power BI. Gathered data from public datasets online and performed data cleaning and relationship management ",
      images: [
        new URL('@/assets/M&T1.png', import.meta.url).href,
        new URL('@/assets/M&T2.png', import.meta.url).href,
        new URL('@/assets/M&T3.png', import.meta.url).href,
        new URL('@/assets/M&TDATAMODEL.png', import.meta.url).href,

      ],
      currentImage: 0,
      tech: ['Excel', 'Power Query', 'Data Modeling', 'Power BI', 'Analysis Report'],
      githubUrl: "https://github.com/jeromeybz/Maven-Toys-Analysis",
      dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiNWNmZDRiNzYtN2M2ZC00OGQyLTg5ZWEtODVlN2I5N2JjYmI1IiwidCI6IjdjZmY5YzA2LThmNGQtNDAwNi1iOWQwLWU4MWRjYWJjZDU1NyIsImMiOjEwfQ%3D%3D',
      Title: 'View Dashboard'
    },

    {
      title: "Technical Support Analysis",
      // description: "Created a Data Visualization using Excel and Power BI. Gathered data from public datasets online and performed data cleaning and relationship management ",
      images: [

        new URL('@/assets/technicalsupp1.png', import.meta.url).href,
        new URL('@/assets/technicalsupp2.png', import.meta.url).href,
        new URL('@/assets/technicalsupp3dm.png', import.meta.url).href,
      ],
      currentImage: 0,
      tech: ['Excel', 'Power Query', 'Power BI', 'Analysis Report'],
      githubUrl: "https://github.com/jeromeybz/Technical-Support-Analysis-",
      dashboardUrl: 'https://app.powerbi.com/view?r=eyJrIjoiZGJmZjc2ZDAtOWExMS00ZGNjLThkOTAtN2JmZTk0ZWQwMWQ5IiwidCI6IjdjZmY5YzA2LThmNGQtNDAwNi1iOWQwLWU4MWRjYWJjZDU1NyIsImMiOjEwfQ%3D%3D',
      Title: 'View Dashboard'
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