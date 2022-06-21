<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader/>
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <ProjectIntro :title="title" :github="github" :images="images" :poster="poster" />
      <!-- <PageFooter class="top-5 right-1/2" />
      <SkillTree :images="images" />
      <div class="grid grid-cols-5 col-span-2 col-start-4">
        <h1 class="col-span-5 mb-1 text-slate-200 text-4xl">Smart Documentation System</h1>
        <a href="https://github.com/jonasclaes/smart-documentation-system">
          <figure class="col-span-1">
          <img src="~/assets/images/logo/GitHub.png" alt="" class="w-16">
        </figure>
      </a>
        <PosterModal class="col-span-3" />
      </div> -->
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
  data: () => ({
    title: "Smart Documentation System",
    github: "https://github.com/jonasclaes/smart-documentation-system",
    images: [
      { id: 1, name: 'Laravel', url: 'https://www.laravel.com/' },
      { id: 2, name: 'PHP', url: 'https://www.php.net/' },
      { id: 3, name: 'MySQL', url: 'https://www.mysql.com/' },
    ],
    poster: "SmartDoc"
  }),
  mounted() {},
  methods: {},
}
</script>
