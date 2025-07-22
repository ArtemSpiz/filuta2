<script setup>
import SmarterCard1 from "@/assets/svg/SmarterCard1.vue";
import SmarterCard2 from "@/assets/svg/SmarterCard2.vue";
import SmarterCard3 from "@/assets/svg/SmarterCard3.vue";
import SmarterCard4 from "@/assets/svg/SmarterCard4.vue";

const SmarterCards = [
  {
    icon: SmarterCard1,
    title: "Reduce manual testing workload",
    subtitle:
      "Automate repetitive tasks to save time and boost efficiency across operations.",
  },
  {
    icon: SmarterCard2,
    title: "Improve traceability and consistency",
    subtitle:
      "Each test run captures structured telemetry, logs, and environment context.",
  },
  {
    icon: SmarterCard3,
    title: "Uncover hidden edge cases",
    subtitle:
      "Agents simulate diverse user behavior and system states, continuously.",
  },
  {
    icon: SmarterCard4,
    title: "Accelerate feedback loops",
    subtitle:
      "Catch issues as they emerge and shorten regression cycles across versions.",
  },
];
</script>

<template>
  <div class="container flex-col items-center max-md:gap-[32px]">
    <div class="flex flex-col items-center gap-[16px]">
      <div class="Title text-center">
        The Smarter Way to Test In-Car Systems
      </div>
      <div class="Subtitle text-center w-full max-w-[680px] max-sm:w-[101%]">
        Outdated compliance methods put school districts at risk. Filuta AI
        automates vendor monitoring with daily checks, eliminating errors,
        saving time, and protecting your funding.
      </div>
    </div>

    <div class="flex gap-[24px] self-stretch max-lg:flex-col">
      <div
        class="flex flex-col bg-[#141219] rounded-[20px] border border-[#141219] p-[32px] pt-[48px] w-[392px] gap-[24px] items-start max-lg:w-full max-xl:p-[32px] max-sm:p-[24px]"
      >
        <div class="text-white font-ibm text-[24px] leading-[130%]">
          Manual Testing Challenges
        </div>
        <div
          class="text-[rgba(255,255,255,0.60)] font-ibm text-[16px] leading-[150%]"
        >
          Manual infotainment testing can be time-consuming and
          resource-intensive. Complex interactions between features may lead to
          missed edge cases. As systems grow more sophisticated, traditional QA
          approaches often need reinforcement to maintain comprehensive
          coverage.
        </div>
      </div>
      <div
        class="flex flex-col z-20 p-[44px] gap-[24px] items-start flex-1 rounded-[20px] border border-[#2B2A30] shadow-[0px_-17px_44px_rgba(0,0,0,0.45)] bg-[radial-gradient(96.6%_144.3%_at_98.75%_2.09%,_#57C1CA_0%,_#2B6064_100%)] max-xl:p-[32px] max-sm:p-[24px]"
      >
        <div class="text-white font-ibm text-[24px] leading-[130%]">
          With Filuta AI, you can:
        </div>
        <div
          class="flex gap-[56px] w-full max-w-[900px] max-xl:gap-[12px] max-md:flex-col"
        >
          <!-- Перший рядок -->
          <div class="flex flex-col gap-[32px] max-xl:gap-[16px]">
            <div class="flex items-start gap-[16px]">
              <component
                :is="SmarterCards[0].icon"
                class="w-[24px] h-[24px] min-w-[24px]"
              />
              <div class="flex flex-col gap-[8px] items-start">
                <div class="text-white text-[18px] font-ibm leading-[150%]">
                  {{ SmarterCards[0].title }}
                </div>
                <div
                  class="text-[rgba(255,255,255,0.80)] text-[16px] leading-[150%] font-ibm"
                >
                  {{ SmarterCards[0].subtitle }}
                </div>
              </div>
            </div>

            <div class="flex items-start gap-[16px]">
              <component
                :is="SmarterCards[1].icon"
                class="w-[24px] h-[24px] min-w-[24px]"
              />
              <div class="flex flex-col gap-[8px] items-start">
                <div class="text-white text-[18px] font-ibm leading-[150%]">
                  {{ SmarterCards[2].title }}
                </div>
                <div
                  class="text-[rgba(255,255,255,0.80)] text-[16px] leading-[150%] font-ibm"
                >
                  {{ SmarterCards[2].subtitle }}
                </div>
              </div>
            </div>
          </div>

          <!-- Другий рядок -->
          <div class="flex flex-col gap-[32px]">
            <div class="flex items-start gap-[16px]">
              <component
                :is="SmarterCards[2].icon"
                class="w-[24px] h-[24px] min-w-[24px]"
              />
              <div class="flex flex-col gap-[8px] items-start">
                <div class="text-white text-[18px] font-ibm leading-[150%]">
                  {{ SmarterCards[1].title }}
                </div>
                <div
                  class="text-[rgba(255,255,255,0.80)] text-[16px] leading-[150%] font-ibm"
                >
                  {{ SmarterCards[1].subtitle }}
                </div>
              </div>
            </div>

            <div class="flex items-start gap-[16px]">
              <component
                :is="SmarterCards[3].icon"
                class="w-[24px] h-[24px] min-w-[24px]"
              />
              <div class="flex flex-col gap-[8px] items-start">
                <div class="text-white text-[18px] font-ibm leading-[150%]">
                  {{ SmarterCards[3].title }}
                </div>
                <div
                  class="text-[rgba(255,255,255,0.80)] text-[16px] leading-[150%] font-ibm"
                >
                  {{ SmarterCards[3].subtitle }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
