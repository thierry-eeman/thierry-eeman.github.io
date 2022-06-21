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
  name: 'RaceFuture',
  data: () => ({
    title: 'Race to the Future',
    github: 'https://github.com/jonasclaes/smart-documentation-system',
    images: [
      { id: 1, name: 'Docker', url: 'https://www.docker.com/' },
      { id: 2, name: 'Python', url: 'https://www.python.org' },
      { id: 3, name: 'AI', url: '' },
      { id: 4, name: 'Keras', url: 'https://www.keras.io/' },
      { id: 5, name: 'Tensorflow', url: 'https://www.tensorflow.org/' },
    ],
  }),
  mounted() {},
  methods: {},
}
</script>
