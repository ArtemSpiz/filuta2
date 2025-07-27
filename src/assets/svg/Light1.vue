<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="204" height="93" viewBox="0 0 204 93" fill="none">
    <g clip-path="url(#clip0_44_82920)">
      <path
        d="M167 6C170.314 6 173 3.31371 173 0H29C29 3.31371 31.6863 6 35 6H167Z"
        :fill="active ? '#A394F7' : '#FFF'"
      />
      <g :opacity="active ? 0.4 : 0" filter="url(#filter0_f_44_82920)">
        <path d="M168 4H32L1.5 90.5H198L168 4Z" fill="url(#paint0_linear_44_82920)" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_44_82920"
        x="-17.5"
        y="-15"
        width="234.5"
        height="124.5"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="9.5" result="effect1_foregroundBlur_44_82920" />
      </filter>
      <linearGradient
        id="paint0_linear_44_82920"
        x1="100.75"
        y1="4"
        x2="100.75"
        y2="90.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#A394F7" />
        <stop offset="1" stop-color="#372B7B" stop-opacity="0" />
      </linearGradient>
      <clipPath id="clip0_44_82920">
        <rect width="204" height="93" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
defineProps({
  active: Boolean,
});
</script>

<style></style>
