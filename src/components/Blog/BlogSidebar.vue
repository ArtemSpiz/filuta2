<template>
  <div class="lg:col-span-1">
    <!-- Author Info -->
    <div class="bg-dark-800 rounded-xl p-6 mb-8">
      <h3 class="text-white font-semibold mb-4">About Filuta</h3>
      <p class="text-gray-300 text-sm leading-relaxed">
        Filuta provides AI-powered compliance solutions for government and education sectors. Our
        expert team develops intelligent workflows to automate manual processes and reduce risks.
      </p>
    </div>

    <!-- Additional sidebar content -->
    <slot />
  </div>
</template>

<script setup>
// This component provides the sidebar layout for blog pages
// It includes the standard "About Filuta" section and allows for additional content
</script>
