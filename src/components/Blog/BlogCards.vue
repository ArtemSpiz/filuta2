<script setup>
import { computed, ref } from "vue";
import blogImageNews from "@/assets/img/blogImage1.png";
import blogImage1 from "@/assets/img/FeaturedCard1.png";
import blogImage2 from "@/assets/img/FeaturedCard2.png";
import blogImage3 from "@/assets/img/FeaturedCard3.png";
import TransparentBtn from "@/ui/TransparentBtn/TransparentBtn.vue";

const BlogCards = [
  {
    slug: "GDC&PGCSanFrancisco2025",
    category: "News",
    title: "GDC & PGC San Francisco 2025",
    subtitle:
      "A quick look back at our time in San Francisco during GDC and PGC.",
    image: blogImageNews,
  },
  {
    slug: "WhyManualComplianceNoLongerWorks",
    category: "Government & Education",
    title: "Why Manual Compliance No Longer Works",
    subtitle:
      "Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.",
    image: blogImage1,
    date: "May 05, 2025",
  },
  {
    slug: "TheFutureofVendorComplianceinK–12Education",
    category: "Government & Education",
    title: "The Future of Vendor Compliance in K–12 Education",
    subtitle:
      "Manual processes are slow, error-prone, and risky. Discover the hidden costs of outdated workflows — and how automation changes the game.",
    image: blogImage2,
    date: "May 05, 2025",
  },
  {
    slug: "5SignsYourDistrictNeedsaComplianceUpgrade",
    category: "Research",
    title: "5 Signs Your District Needs a Compliance Upgrade",
    subtitle:
      "A quick look back at our time in San Francisco during GDC and PGC.",
    image: blogImage3,
    date: "May 05, 2025",
  },

  {
    slug: "5SignsYourDistrictNeedsaComplianceUpgrade",
    category: "Government & Education",
    title: "5 Signs Your District Needs a Compliance Upgrade",
    subtitle:
      "A quick look back at our time in San Francisco during GDC and PGC.",
    image: blogImage3,
    date: "May 05, 2025",
  },
];

const orderedCategories = ["News", "Government & Education", "Research"];

function filteredCards(category) {
  if (category === "All") return BlogCards;
  return BlogCards.filter(
    (card) => card.category.toLowerCase() === category.toLowerCase()
  );
}

const categories = [
  {
    title: "All",
  },
  {
    title: "News",
  },
  {
    title: "Research",
  },
  {
    title: "Government & Education",
  },
];

const activeIndex = ref(0);

function setActive(index) {
  activeIndex.value = index;
}

const activeCategory = computed(() => categories[activeIndex.value].title);

const filteredCardsByCategory = (category) => {
  if (category.toLowerCase() === "all") return BlogCards;
  return BlogCards.filter(
    (card) => card.category.toLowerCase() === category.toLowerCase()
  );
};

const categoriesToShow = computed(() => {
  if (activeCategory.value.toLowerCase() === "all") {
    return orderedCategories;
  } else {
    return [activeCategory.value];
  }
});
</script>

<template>
  <div class="flex-col gap-[56px] flex max-md:gap-[32px]">
    <div
      class="flex gap-[16px] container ptNone pbNone overflow-scroll categories snap-mandatory"
    >
      <div
        v-for="(category, index) in categories"
        :key="index"
        class="px-[12px] whitespace-nowrap h-[33px] center flex rounded-full border cursor-pointer select-none text-[16px] font-mono uppercase"
        :style="{
          background:
            index === activeIndex
              ? 'linear-gradient(0deg, #302F45 -8.44%, #424069 107.14%)'
              : 'linear-gradient(180deg, rgba(103, 103, 103, 0.30) 0.24%, rgba(19, 32, 48, 0.00) 120.36%)',
          color: index === activeIndex ? '#9E92F5' : '#8B8B8B',
          borderColor: index === activeIndex ? '#484873' : '#393939',
        }"
        @click="setActive(index)"
      >
        {{ category.title }}
      </div>
    </div>

    <div class="flex flex-col gap-[56px] container ptNone max-md:gap-[32px]">
      <template v-for="cat in categoriesToShow" :key="cat">
        <div v-if="filteredCards(cat).length">
          <div v-if="cat === 'News'" class="flex flex-col gap-[24px]">
            <div
              v-for="(card, i) in filteredCardsByCategory(cat)"
              :key="i"
              class="w-full h-[484px] flex gap-[32px] self-stretch justify-between max-w-[1600px] p-[40px] border border-[#2B2A30] rounded-[20px] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] max-xl:p-[30px] max-xl:h-[400px] max-lg:p-[20px] max-lg:h-[350px] max-md:h-max max-md:flex-col max-md:p-[16px]"
            >
              <div
                class="flex flex-col justify-between flex-1 max-md:gap-[24px]"
              >
                <div class="flex flex-col gap-[32px] max-md:gap-[16px]">
                  <div
                    class="text-[#57C1CA] font-ibm text-[14px] leading-[130%] tracking-[-0.28px]"
                  >
                    {{ card.category }}
                  </div>
                  <div class="flex flex-col gap-[16px] max-md:gap-[12px]">
                    <div
                      class="text-[56px] text-white font-ibm leading-[125%] max-xl:text-[45px] max-lg:text-[40px] max-md:text-[35px] max-sm:text-[30px]"
                    >
                      {{ card.title }}
                    </div>
                    <div
                      class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%] max-xl:w-[300px]"
                    >
                      {{ card.subtitle }}
                    </div>
                  </div>
                </div>
                <router-link :to="`/blog/${card.slug}`">
                  <TransparentBtn text="Read" class="w-max"
                /></router-link>
              </div>
              <div
                class="rounded-[16px] h-full w-auto max-w-[520px] object-cover max-lg:w-[425px] max-md:w-full max-md:max-w-full"
              >
                <img :src="card.image" alt="image" />
              </div>
            </div>
          </div>

          <div
            v-else
            class="grid grid-cols-3 gap-[24px] max-xl:grid-cols-2 max-md:flex max-md:flex-col"
          >
            <router-link
              :to="`/blog/${card.slug}`"
              v-for="(card, i) in filteredCardsByCategory(cat)"
              :key="i"
              class="p-[20px] cursor-pointer border border-[#2B2A30] flex-1 flex flex-col gap-[16px] rounded-[20px] bg-[#141219] shadow-[0_-17px_44px_0_rgba(0,0,0,0.45)] max-md:p-[16px] max-sm:p-[12px]"
            >
              <div class="w-full h-auto">
                <img :src="card.image" alt="" />
              </div>
              <div class="flex flex-col gap-[8px]">
                <div class="flex items-center justify-between">
                  <div
                    class="text-[#57C1CA] font-ibm text-[14px] leading-[130%] tracking-[-0.28px]"
                  >
                    {{ card.category }}
                  </div>
                  <div
                    class="text-[#7C7C7C] text-[14px] font-ibm leading-[130%] tracking-[-0.28px]"
                  >
                    {{ card.date }}
                  </div>
                </div>
                <div class="text-white text-[24px] font-ibm leading-[130%]">
                  {{ card.title }}
                </div>
              </div>

              <div
                class="text-[rgba(255,255,255,0.60)] text-[16px] font-ibm leading-[150%]"
              >
                {{ card.subtitle }}
              </div>
            </router-link>
          </div>
        </div>
      </template>

      <div class="center w-full flex">
        <button
          class="h-[48px] px-[24px] center flex rounded-full border border-white bg-[rgba(255,255,255,0.02)] text-white text-[16px] font-ibm"
        >
          Load more
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  scrollbar-width: none;
}
</style>
