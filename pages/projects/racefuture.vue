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
      <div class="col-span-3 mx-3 pl-4">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/RTTF Simplified Diagram.png"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 col-start-4 pl-4 text-slate-300 text-2xl">
        <h2 class="text-lime-400">The Quest</h2>
        <p class="text-lg mt-4 text-justify">
          Starting off with a package containing a car, a Raspberry Pi and a few
          IoT devices, we had two important tasks ahead of us: Setting up the
          hardware in a solid and flexible way for any type of weather and
          deploying Docker containers with software that would communicate with
          and control the car.
        </p>
        <p class="text-lg mt-4 text-justify">
          The rules of engagement were clear: Apart from some fixed parts, we
          could modify the car to our liking. It had to drive from start to
          finish as quick as possible by itself. Any corrections or interference
          would result in penalty time.
        </p>
      </div>
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
      { id: 1, name: 'RaspberryPi', url: 'https://www.docker.com/' },
      { id: 2, name: 'Docker', url: 'https://www.docker.com/' },
      { id: 3, name: 'Python', url: 'https://www.python.org' },
      { id: 4, name: 'AI', url: '' },
      { id: 5, name: 'Keras', url: 'https://www.keras.io/' },
      { id: 6, name: 'Tensorflow', url: 'https://www.tensorflow.org/' },
    ],
    poster: 'RaceToTheFuture',
  }),
  mounted() {},
  methods: {},
}
</script>
