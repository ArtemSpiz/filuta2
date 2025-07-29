<template>
  <section class="py-20 bg-dark-900">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">
          Ready to Transform Your Compliance?
        </h2>
        <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join leading organizations that trust Filuta to automate their compliance processes and
          reduce operational risks.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-primary/90 transition-all duration-300 transform hover:scale-105"
          >
            Get Started
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
            to="/blog"
            class="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-dark-900 transition-all duration-300"
          >
            Read Our Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
