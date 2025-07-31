<template>
  <div v-if="members && members.length > 0">
    <Carousel
      :title="title"
      :subtitle="subtitle"
      :items="members"
      :slides-per-view="3"
      :space-between="24"
      :breakpoints="{
        320: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      }"
    >
      <template #default="{ item: member, index }">
        <TeamMemberCard
          :member="member"
          :index="index"
          :active-card-indexes="activeCardIndexes"
          @card-click="handleActiveCard"
        />
      </template>
    </Carousel>
  </div>
  <div v-else class="text-center text-gray-400 py-8">
    <p>No team members found for this department.</p>
    <p class="text-sm mt-2">Please check the Directus configuration.</p>
  </div>
</template>

<script setup lang="ts">
import Carousel from '@/components/ui/Carousel/Carousel.vue';
import TeamMemberCard from '@/components/shared/TeamMemberCard.vue';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: any;
  department: string;
  linkedin_url?: string;
  order?: number;
}

interface Props {
  members: TeamMember[];
  title: string;
  subtitle: string;
}

defineProps<Props>();

const activeCardIndexes = ref<number[]>([]);

const handleActiveCard = (index: number) => {
  const arr = activeCardIndexes.value;
  const i = arr.indexOf(index);
  if (i === -1) {
    arr.push(index);
  } else {
    arr.splice(i, 1);
  }
};
</script>
