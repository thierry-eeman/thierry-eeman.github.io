<template>
  <div>
    <div class="p-10 z-1 grid grid-cols-2 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen">
      <PageHeader/>
      <h1>Artwork Overview</h1>
      <div id="cards" class="grid grid-cols-4">
        <div class="bg-blue-500 col-span-1">
          <h2>Bonjour</h2>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AtomParticles',
  data: () => ({}),
  mounted() {
  },
  methods: {

  }
}
</script>
