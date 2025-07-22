<script setup>
import GovernmentHero from "@/components/Government/GovernmentHero.vue";
import Help from "@/components/Government/Help.vue";
import Case from "@/components/Government/Case.vue";
import Smarter from "@/components/Government/Smarter.vue";
import Build from "@/components/Home/Build/Build.vue";
import Footer from "@/layout/Footer/Footer.vue";
import Featured from "@/components/Government/Featured.vue";
</script>

<template>
  <GovernmentHero />
  <Smarter />
  <Help />
  <Case />
  <Featured />
  <Build
    titleClass="max-w-[750px]"
    subtitleClass="w-[400px]"
    title="The Future of Automotive Testing is Here"
    subtitle="Let Filuta AI enhance your infotainment validation so your team can focus on building the next generation of in-vehicle experiences."
  />
  <Footer />
</template>

<style></style>
