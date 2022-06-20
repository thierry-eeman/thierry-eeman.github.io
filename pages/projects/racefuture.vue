<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <PageFooter class="bottom-80 right-10" />
      <SkillTree :images="images" />
      <h1 class="col-span-2 col-start-4 mb-5 text-slate-200 text-4xl">
        Race to the Future
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaceFuture',
  data: () => ({
    images: [{ id: 1, name: 'Docker', url: 'https://www.docker.com/' }],
  }),
  mounted() {},
  methods: {},
}
</script>
