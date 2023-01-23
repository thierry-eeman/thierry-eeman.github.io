<template>
  <div class="grid grid-cols-5 col-span-5">
    <PageFooter class="top-5 right-1/4" />
    <SkillTree :images="images" />
    <div class="grid grid-cols-5 col-span-2 col-start-4">
      <h1 class="col-span-5 mb-1 text-slate-400 text-4xl uppercase">
        {{ title }}
      </h1>
      <a :href="`${github}`">
        <figure class="col-span-1">
          <img src="~/assets/images/logo/GitHub.png" alt="" class="w-16" />
        </figure>
      </a>
      <PosterModal :poster="poster" class="col-span-3" />
    </div>
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter.vue'
import SkillTree from '~/components/SkillTree.vue'
import PosterModal from '~/components/PosterModal.vue'
export default {
  name: 'ProjectIntro',
  components: {
    PageFooter,
    SkillTree,
    PosterModal,
  },
  props: {
    title: {
      type: String,
      default: 'Project Name',
    },
    github: {
      type: String,
      default: '',
    },
    images: {
      type: Array,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  mounted() {},
  methods: {},
}
</script>
