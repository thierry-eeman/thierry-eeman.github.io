<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <ProjectIntro
        :title="title"
        :github="github"
        :images="images"
        :poster="poster"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConcretePrinter',
  data: () => ({
    title: '3D Concrete Printing',
    github: 'https://github.com/itfactory-di/3DCP_Slicer_Grasshopper3d',
    images: [
      { id: 1, name: 'Csharp', url: '' },
      { id: 2, name: 'Docker', url: '' },
      { id: 3, name: 'OPC UA', url: '' },
      { id: 4, name: 'Node Red', url: '' },
      { id: 5, name: 'Rhinoceros3D', url: '' },
      { id: 6, name: 'GrassHopper', url: '' },
    ],
    poster: 'ConcretePrinter',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
