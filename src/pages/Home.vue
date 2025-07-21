<script setup>
import Hero from "../components/Home/Hero/Hero";
import Problems from "../components/Home/Problems/Problems";
import Transform from "@/components/Home/Transform/Transform.vue";
import Everything from "../components/Home/Everything/Everything";
import Powered from "@/components/Home/Powered/Powered.vue";
import Intelligent from "@/components/Home/Intelligent/Intelligent.vue";
import Trusted from "@/components/Home/Trusted/Trusted.vue";
import Security from "@/components/Home/Security/Security.vue";
import Build from "@/components/Home/Build/Build.vue";
import Footer from "@/layout/Footer/Footer.vue";
</script>

<template>
  <Hero />
  <Problems />
  <Transform />
  <Everything />
  <Powered />
  <Intelligent />
  <Trusted />
  <Security />
  <Build
    title="Build Better Games, With Less QA Stress"
    subtitle="Let Filuta handle the grunt work so your team can focus on great gameplay."
  />
  <Footer />
</template>

<style></style>
