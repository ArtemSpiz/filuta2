<template>
  <div
    class="team-card p-6 flex relative flex-col gap-6 self-stretch rounded-5xl border border-dark-700 shadow-glow transition-all duration-500 max-md:p-3 max-md:shrink-0"
    :style="{
      background: activeCardIndexes.includes(index)
        ? 'radial-gradient(67.2% 132.88% at 100% 100%, #57C1CA 0%, #2B6064 100%)'
        : '#141219',
    }"
    @mouseenter="handleActiveCard(index)"
    @mouseleave="handleActiveCard(index)"
  >
    <div
      class="w-full h-auto transition-all duration-500 max-md:w-[270px] max-md:h-[321px] rounded-lg overflow-hidden"
      :class="{
        'opacity-100 translate-y-0': !activeCardIndexes.includes(index),
        'opacity-0 -translate-y-8': activeCardIndexes.includes(index),
      }"
    >
      <OptimizedImage
        :image-id="member.image && isDirectusAsset(member.image) ? member.image.id : undefined"
        :alt="member.name"
        :width="240"
        :height="320"
        class="max-md:object-cover max-md:object-[top_-20px_right_0px]"
      />
    </div>
    <div
      class="flex flex-col gap-2 transition-all duration-500"
      :class="{
        'opacity-100 translate-y-0': !activeCardIndexes.includes(index),
        'opacity-0 -translate-y-8': activeCardIndexes.includes(index),
      }"
    >
      <div class="text-white text-2xl leading-[130%] font-ibm">
        {{ member.name }}
      </div>
      <div class="text-white/60 text-base font-ibm leading-[150%]">
        {{ member.position }}
      </div>
    </div>

    <div
      class="text-white top-6 pr-6 absolute font-ibm text-base leading-[150%] transition-all duration-[450ms]"
      :class="{
        'opacity-100 translate-y-0': activeCardIndexes.includes(index),
        'opacity-0 translate-y-8': !activeCardIndexes.includes(index),
      }"
    >
      {{ member.bio }}
    </div>

    <div
      class="min-w-6 bottom-6 absolute transition-all duration-500"
      :class="{
        'opacity-100 translate-y-0': activeCardIndexes.includes(index),
        'opacity-0 translate-y-8': !activeCardIndexes.includes(index),
      }"
    >
      <a
        v-if="member.linkedIn"
        :href="member.linkedIn"
        target="_blank"
        rel="noopener noreferrer"
        class="cursor-pointer hover:opacity-80 transition-opacity duration-200"
        :title="`View ${member.name}'s LinkedIn profile`"
      >
        <LinkedInIcon />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import LinkedInIcon from '@/assets/svg/linkedInIcon.vue';
import OptimizedImage from '@/components/ui/OptimizedImage.vue';
import type { TeamMember } from '@/types/team';

interface Props {
  member: TeamMember;
  index: number;
  activeCardIndexes: number[];
}

defineProps<Props>();

const emit = defineEmits<{
  (e: 'card-click', index: number): void;
}>();

const handleActiveCard = (index: number) => {
  emit('card-click', index);
};

const isDirectusAsset = (image: any) => {
  return image && typeof image === 'object' && 'id' in image;
};
</script>

<style scoped>
.team-card {
  scroll-snap-align: center;
}
</style>
