<script setup>
import HighlightsCardsIcon1 from '@/assets/svg/HighlightsCardsIcon1.vue';
import HighlightsCardsIcon2 from '@/assets/svg/HighlightsCardsIcon2.vue';
import HighlightsCardsIcon3 from '@/assets/svg/HighlightsCardsIcon3.vue';
import light from '@/assets/img/lightRightSecur.png';
import ff from '../../assets/img/imgCard3.png';
import Star from '@/assets/svg/Star.vue';
import Section from '../ui/Section/Section.vue';

const firstCardSubtitle = [
  {
    subtitle: 'Automating video game QA using symbolic AI tools like',
    span: 'automated planning and synthesis',
  },
  {
    subtitle: 'Developing next-generation algorithms for planning',
    span: 'action model synthesis',
  },
  {
    subtitle: 'Optimizing food delivery logistics',
    span: 'through hybrid AI techniques',
  },
];
</script>

<template>
  <div class="relative max-w-[100vw]">
    <div
      class="absolute -top-32 right-[0px] w-[996px] h-[618px] pointer-events-none max-md:w-[527px] max-md:h-[327px] max-md:-top-12"
    >
      <img :src="light" alt="light" />
    </div>
    <Section
      align="left"
      text-wrap-class="max-md:mb-12"
      title="Highlights & Achievements"
      subtitle="What We've Built, Proven, and Published"
      text-subtitle=""
    >
      <div
        class="grid grid-cols-3 grid-rows-2 gap-6 max-xl:grid-cols-4 max-lg:grid-rows-3 max-md:grid-cols-1 max-md:grid-rows-4auto"
      >
        <div
          class="col-span-2 p-8 flex flex-col pt-12 gap-4 rounded-5xl border border-dark-700 bg-dark-900 max-lg:col-span-4 max-md:h-max max-md:col-span-full"
        >
          <div class="flex flex-col gap-8">
            <HighlightsCardsIcon1 />
            <div class="text-white text-2xl font-ibm leading-[130%]">Latest Papers & Preprints</div>
          </div>

          <div class="flex flex-col gap-2">
            <div class="text-gray-400 text-base font-ibm leading-[150%]">
              We recently released three preprints showcasing our latest progress in Composite AI:
            </div>
            <div class="flex gap-3 pl-6 items-center">
              <span class="text-white">
                <div class="flex flex-col gap-2">
                  <div
                    v-for="(card, index) in firstCardSubtitle"
                    :key="index"
                    class="flex gap-3 items-center"
                  >
                    <Star />
                    <div class="text-gray-400 text-base font-ibm leading-[150%]">
                      {{ card.subtitle }}
                      <span
                        class="text-brand-secondary underline underline-offset-2 decoration-solid"
                      >
                        {{ card.span }}
                      </span>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div
          class="col-start-3 p-8 flex flex-col pt-12 gap-4 rounded-5xl border border-dark-700 bg-dark-800 max-xl:col-span-2 max-lg:col-span-4 max-lg:row-start-2 max-md:col-span-1 max-md:h-max"
        >
          <div class="flex flex-col gap-8">
            <HighlightsCardsIcon2 />
            <div class="text-white text-2xl font-ibm leading-[130%]">
              Recognition Across Leading Conferences
            </div>
          </div>

          <div class="text-gray-400 text-base font-ibm leading-[150%]">
            Our Filuta platform prototype was presented at
            <span class="text-brand-secondary underline underline-offset-2 decoration-solid"
              >ICAPS 2023,</span
            >
            where it was highly praised and awarded 2nd place in the Best System Demonstration
            Awards, recognizing both innovation and technical depth.
          </div>
        </div>

        <div
          class="row-start-2 bg-no-repeat bg-cover bg-center rounded-5xl max-xl:col-span-2 max-lg:row-span-3 max-md:h-[342px] max-md:row-start-4 max-md:col-span-1"
          :style="{ backgroundImage: `url(${ff})` }"
        ></div>

        <div
          class="col-span-2 flex flex-col row-start-2 p-8 pt-12 gap-4 rounded-5xl border border-dark-700 max-lg:row-span-3 max-md:row-start-3 max-md:row-end-3 max-md:col-span-1 max-md:h-max"
          :style="{
            background: 'linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 100%), #121619',
          }"
        >
          <div class="flex flex-col gap-8">
            <HighlightsCardsIcon3 />
            <div class="text-white text-2xl font-ibm leading-[130%]">
              Recognition Across Leading Conferences
            </div>
          </div>

          <div class="text-gray-400 text-base leading-[150%] font-ibm">
            We showcased Filuta at SAT 2023 and SoCS 2023, receiving valuable feedback and strong
            support from the international research community — reinforcing our commitment to
            practical, impactful AI research.
          </div>
        </div>
      </div></Section
    >
  </div>
</template>

<style scoped></style>
