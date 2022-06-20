<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <h1 class="col-span-5 col-start-4 mb-5 text-slate-200 text-4xl">
        Smart Documentation System
      </h1>
      <div class="col-span-3 mx-3 pl-4">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/smartdocsystem1.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 col-start-4 text-slate-300 text-2xl">
        <h2 class="text-lime-400">General Information</h2>
        <p class="text-lg mt-4">
          This project was completed for Delta Technics, a company in
          Heist-op-den-Berg that is responsible for cabling, datacom and
          building intelligence.
        </p>
      </div>
      <div class="col-span-5 col-start-1 mx-3 pl-4 text-xl text-slate-300">
        <h3>Background information</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartDoc',
  data: () => ({}),
  mounted() {},
  methods: {},
}
</script>
