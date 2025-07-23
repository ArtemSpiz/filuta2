<script setup>
import Highlights from "@/components/Research/Highlights.vue";
import ResearchHero from "@/components/Research/ResearchHero.vue";
import Talents from "@/components/Research/Talents.vue";
import Team from "@/components/Research/Team.vue";
import TeamCardsRes from "@/content/ResTeamData";
import Footer from "@/layout/Footer/Footer.vue";
</script>

<template>
  <ResearchHero />
  <Team :team-cards="TeamCardsRes" />
  <Highlights />
  <Talents />
  <Footer />
</template>

<style scoped></style>
