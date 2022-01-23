<template>
  <div>

    <div class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen">
      <PageHeader/>
      <div class="grid grid-cols-5 m-5 p-5 gap-3">
        <h1 class="col-span-5 col-start-4 text-slate-200 text-4xl">Artwork Overview</h1>
      </div>
      <div id="cards" class="grid grid-cols-12 m-auto p-8 gap-8">
        <nuxt-link to="/artwork/reinhardt" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-orange-800">Hardware Heroes</h2>
            <figure>
              <img
                class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                src="~/assets/images/reinhardt.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #001</p>
                <p>Hardware Hero Reinhardt</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/astartes" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-orange-800">Hardware Heroes</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/warhammer.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #002</p>
                <p>Hardware Hero Astartes</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/squares" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-teal-700">Creative Coding</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/squares.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #003</p>
                <p>Squiggly Squares</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/reaper" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-orange-800">Hardware Heroes</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/reaper.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #004</p>
                <p>Hardware Hero Reaper</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/mandalorian" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-orange-800">Hardware Heroes</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/mandalorian.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #005</p>
                <p>Hardware Hero Mandalorian</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/ascii" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-teal-700">Creative Coding</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/ascii.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #006</p>
                <p>Ascii Art</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/ichigo" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-orange-800">Hardware Heroes</h2>
            <figure>
              <img class="w-full block h-32 object-none object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/ichigo.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #007</p>
                <p>Hardware Hero Ichigo Kurosaki</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/atoms" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-teal-700">Creative Coding</h2>
            <figure>
              <img class="w-full block h-32 object-cover object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/atoms.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #008</p>
                <p>Atom Particles</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
        <nuxt-link to="/artwork/particles" class="col-span-3">
          <div
            class="bg-slate-800 col-span-3 h-auto rounded-2xl h-64 text-grey-darkest no-underline shadow-lg hover:shadow-2xl hover:scale-110 transition ease-in-out delay-50">
            <h2 class="text-lg p-3 text-right uppercase text-teal-700">Creative Coding</h2>
            <figure>
              <img class="w-full block h-32 object-cover object-center rounded-b-2xl blur-sm brightness-50 hover:blur-none hover:brightness-100"
                   src="~/assets/images/particles.jpg" alt="">
              <figcaption class="text-center text-md py-5 text-slate-500"><p>Artwork #009</p>
                <p>Image to Particle</p></figcaption>
            </figure>
          </div>
        </nuxt-link>
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
  methods: {}
}
</script>
