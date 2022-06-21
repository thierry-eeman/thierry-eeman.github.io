<template>
    <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <PageFooter class="top-5 right-1/2" />
      <SkillTree :images="images" />
      <h1 class="col-span-2 col-start-4 mb-5 text-slate-200 text-4xl">
        Leflab Concrete Printer
      </h1>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'ConcretePrinter',
      data: () => ({
        images: [
          { id: 1, name: 'Csharp', url: '' },
          { id: 2, name: 'Docker', url: '' },
          { id: 3, name: 'OPC UA', url: '' },
          { id: 4, name: 'Node Red', url: '' },
          { id: 5, name: 'Rhinoceros3D', url: '' },
          { id: 6, name: 'GrassHopper', url: '' },
        ],
      }),
      mounted() {},
      methods: {},
    }
    </script>
    
    <style scoped></style>