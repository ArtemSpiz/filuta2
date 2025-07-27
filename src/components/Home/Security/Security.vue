<script setup>
import SecurityIcon1 from '@/assets/svg/SecurityIcon1.vue';
import SecurityIcon2 from '@/assets/svg/SecurityIcon2.vue';
import SecurityIcon3 from '@/assets/svg/SecurityIcon3.vue';
import SecurityIcon4 from '@/assets/svg/SecurityIcon4.vue';
import SecurityIcon5 from '@/assets/svg/SecurityIcon5.vue';
import SecurityIcon6 from '@/assets/svg/SecurityIcon6.vue';

const SecurityCards = [
  {
    icon: SecurityIcon1,
    title: "AI doesn't keep your data",
    subtitle: 'We don’t store or reuse your data — ever. What goes in, stays yours.',
  },
  {
    icon: SecurityIcon2,
    title: 'Access based on roles',
    subtitle:
      'Only the right people can access the right things, with full control over permissions.',
  },
  {
    icon: SecurityIcon3,
    title: 'Encrypted by default',
    subtitle:
      'All data is protected during transfer and storage with industry-standard encryption.',
  },
  {
    icon: SecurityIcon4,
    title: 'Regular backups',
    subtitle: 'We keep secure backups in case anything goes wrong — your info stays safe.',
  },
  {
    icon: SecurityIcon5,
    title: 'SSO-ready',
    subtitle: 'Use your company’s login system (SAML) for easy and secure access.',
  },
  {
    icon: SecurityIcon6,
    title: ' No training on your data',
    subtitle: 'Your data won’t be used to train any AI models, open-source or commercial.',
  },
];
</script>

<template>
  <div class="flex flex-col items-center gap-[48px] justify-center container">
    <div class="flex flex-col items-center gap-4">
      <div class="Title text-center">Security You Can Trust</div>
      <div class="Subtitle text-center">
        Your data stays safe, private, and fully under your control.
      </div>
    </div>

    <div class="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 w-full">
      <div
        v-for="(card, index) in SecurityCards"
        :key="index"
        class="flex flex-col items-start justify-center p-12 gap-4 rounded-[20px] border border-[#2b2a30] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] cardsHover max-lg:p-[24px]"
      >
        <div class="flex flex-col items-center gap-8 w-full">
          <component :is="card.icon" />
          <div class="text-white text-center font-ibm text-[24px] font-normal leading-[130%]">
            {{ card.title }}
          </div>
        </div>
        <div class="text-[#9d9d9d] text-center font-ibm text-[16px] font-normal leading-[150%]">
          {{ card.subtitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
