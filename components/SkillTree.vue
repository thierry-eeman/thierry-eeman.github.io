<template>
  <div
    class="col-span-3 col-start-1 mx-6 mb-3 px-6 pb-6 border-4 border-slate-700 rounded-xl"
  >
    <div class="grid grid-cols-8 col-span-3">
      <h2 class="text-rose-400 text-2xl my-4 col-span-8">
        Trained Skills <span class="text-slate-700">for this project</span>
      </h2>
      <div v-for="image in images" :key="image.id" class="col-span-1 mb-3 px-2">
        <a :href="`${image.url}`">
          <figure>
            <img
              class="object-cover object-center"
              :src="require(`~/assets/images/logo/${image.name}.png`)"
              :alt="`${image.name}`"
            />
          </figure>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
}
</script>
