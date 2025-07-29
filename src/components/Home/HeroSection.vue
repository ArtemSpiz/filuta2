<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900"></div>
    <div class="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>

    <!-- Animated background elements -->
    <div class="absolute inset-0">
      <div
        class="absolute top-20 left-20 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute bottom-20 right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"
      ></div>
    </div>

    <!-- Content -->
    <div class="relative container mx-auto px-4 text-center z-10">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
          AI-Powered
          <span class="text-brand-primary">Compliance</span>
          Solutions
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Automate manual processes and reduce risks with intelligent workflows designed for
          government and education sectors.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/government-education"
            class="inline-flex items-center px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105 shadow-glow"
          >
            Explore Solutions
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/about-us"
            class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-dark-900 transition-all duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  </section>
</template>
