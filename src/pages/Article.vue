<script setup>
defineProps({
  slug: String,
});
import ArticleContent from "@/components/Article/ArticleContent.vue";
import Related from "@/components/Article/Related.vue";
import Footer from "@/layout/Footer/Footer.vue";
</script>

<template>
  <ArticleContent />
  <Related />
  <Footer />
</template>

<style scoped></style>
