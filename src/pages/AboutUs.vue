<script setup>
import AboutHero from "@/components/AboutUs/AboutHero.vue";
import Composite from "@/components/AboutUs/Composite.vue";
import Values from "@/components/AboutUs/Values.vue";
import Build from "@/components/Home/Build/Build.vue";
import Team from "@/components/Research/Team.vue";
import AboutTeamData from "@/content/AboutTeamData";
import Footer from "@/layout/Footer/Footer.vue";
</script>

<template>
  <AboutHero />
  <Composite />
  <Team :team-cards="AboutTeamData" />
  <Values />
  <Build
    title="Build Better Games, With Less QA Stress"
    subtitle="Let Filuta handle the grunt work so your team can focus on great gameplay."
  />
  <Footer />
</template>

<style scoped></style>
