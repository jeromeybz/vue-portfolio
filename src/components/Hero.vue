<template>
  <section id= "hero" class="flex flex-col md:flex-row items-center justify-center gap-16 p-16 min-h-[calc(80vh-4rem)] scroll-mt-23">
    <div class="flex flex-col items-center space-y-4">
      <img
        src="@/assets/prof.jpg"
        alt="Your Name"
        class="w-64 h-64 rounded-full object-cover border-8"
        style="border-color: #42b883;"
      />
      <p class="italic text-white-500 text-lg leading-tight">"Bruhh...""</p>
      <!-- <p class="italic text-white-200 text-lg leading-tight">Learn to take risks.</p>
      <p class="italic text-white-200 text-lg leading-tight">Convert your fear into power and brilliance.""</p>
      <p class="italic text-white-200 text-lg leading-tight"> — Robert Kiyosaki</p> -->
    </div>

    <div class="text-center md:text-left space-y-4 flex flex-col items-center md:items-start">
      <h5 class="text-5xl font-bold text-white-800">Marc Jerome F. Colobong</h5>
      <p class="text-white-600 max-w-xl text-2xl">
        A Computer Science student at Mariano Marcos State University. I do software development and data analytics for fun).
      </p>
      <a
        href="/Resume_Colobongs.pdf"
        download
        class="inline-block mt-4 px-6 py-3 rounded hover:opacity-90 transition text-2xl"
        style="background-color: #42b883; color: #35495e; font-weight: bold;"
      >
        Download CV
      </a>

      <div class="flex items-center space-x-4 mt-4">
        <a href="https://www.instagram.com/jeromesszzz/" target="_blank" aria-label="Instagram">
          <img src="@/assets/instagram.svg" alt="Instagram" class="w-8 h-8 sm:w-10 sm:h-10" />
        </a>
        <a href="https://github.com/jeromeybz" target="_blank" aria-label="GitHub">
          <img src="@/assets/githublogo.png" alt="GitHub" class="w-10 h-10 sm:w-12 sm:h-12" />
        </a>
      </div>
    </div>
  </section>
</template>
