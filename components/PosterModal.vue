<template>
  <div class="col-span-1">
    <button
      class="text-white rounded bg-pink-500 px-6 py-4 font-sans font-semibold shadow-lg hover:bg-pink-400 outline-none active:outline-none focus:outline-none"
      @click="toggleModal = !toggleModal"
    >
      Project Poster
    </button>
    <div
      v-if="toggleModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-full max-w-xl">
        <div class="bg-white w-full rounded">
          <figure>
            <img
              class="object-cover object-center"
              :src="require(`~/assets/images/reaper.jpg`)"
              alt=""
            />
          </figure>

          <button
            class="bg-slate-800 text-white px-6 py-4 w-full"
            @click="toggleModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="toggleModal"
      class="absolute z-40 inset-0 opacity-50 bg-black h-full w-full"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'PosterModal',
  data: () => ({
    toggleModal: false,
  }),
  mounted() {},
  methods: {},
}
</script>
