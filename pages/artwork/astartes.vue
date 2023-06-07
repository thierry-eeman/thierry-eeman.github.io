<template>
  <div>
    <div
      class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
    >
      <PageHeader />
      <div class="grid grid-cols-8 m-5 p-5 gap-3">
        <h1 class="col-span-8 col-start-6 text-slate-200 text-4xl">
          Artwork Overview
        </h1>
      </div>
      <div class="grid grid-cols-2 gap-5 mx-48 margin-auto">
        <img
          src="~/assets/images/warhammer.jpg"
          class="width-full object-contain rounded-2xl shadow-2xl"
          alt=""
        />
        <div class="pl-32 text-2xl text-rose-900">
          <h2 class="text-black">Hardware Hero #002</h2>
          <h3 class="text-4xl">Adeptus Astartes</h3>
          <br />
          <hr class="border-slate-500" />
          <PageFooter2 />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HardwareAstartes',
  data: () => ({}),
  mounted() {},
  methods: {},
}
</script>
