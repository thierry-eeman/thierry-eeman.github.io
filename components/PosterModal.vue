<template>
  <div class="col-span-1">
    <button
      class="w-full text-white rounded bg-gradient-to-b from-slate-700 to-slate-800 px-6 py-4 font-sans font-semibold shadow-sm drop-shadow-sm hover:shadow-cyan-500 outline-none active:outline-none focus:outline-cyan-500"
      @click="toggleModal = !toggleModal"
    >
      Project Poster
    </button>
    <div
      v-if="toggleModal"
      class="fixed rounded-2xl overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-full max-w-xl rounded-2xl">
        <div class="bg-white w-full rounded-2xl">
          <figure>
            <img
              class="object-center rounded-t-xl"
              :src="require(`~/assets/images/poster/${poster}.png`)"
              alt=""
            />
          </figure>

          <button
            class="bg-rose-700 text-white px-6 py-4 w-full rounded-b-xl"
            @click="toggleModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute z-40 inset-0 opacity-90 bg-black h-screen w-full"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PosterModal',
  props: {
    poster: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    toggleModal: false,
  }),
  mounted() {},
  methods: {},
}
</script>
