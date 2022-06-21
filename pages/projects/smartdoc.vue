<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-y-12">
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
            src="~/assets/images/smartdocsystem1.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 col-start-4 pl-4 text-slate-300 text-2xl">
        <h2 class="text-lime-400">General Information</h2>
        <p class="text-lg mt-4 text-justify">
          This project was completed for Delta Technics, a company in
          Heist-op-den-Berg that is responsible for cabling, datacom and
          building intelligence. Their problem, at the surface, was rather
          simple. One of the main focus points of the company was building,
          maintaining and updating patch cabinets for their clients. Over time
          and after many interventions, the information about the content and
          wiring of each cabinet, became very difficult to maintain.
        </p>
        <p class="text-lg mt-4 text-justify">
          We were challenged with the task to come up with an elegant solution
          that would allow technicians to easily retrieve the latest, up-to-date
          information while also ensuring that any new information would be
          processed and fed to the system.
        </p>
      </div>
      <div class="col-span-3 col-start-1 mx-3 pl-4 text-2xl text-slate-300">
        <h2 class="text-lime-400">Project setup</h2>
        <p class="text-lg mt-4 text-justify">
          To tackle this problem, I teamed up with fellow student
          <a href="https://www.jonasclaes.be"
            ><span class="text-2x text-rose-600">Jonas Claes</span></a
          >, who proposed to use the Laravel PHP framework. This gave me an
          excellent opportunity to learn about PHP and working with a framework
          and official documentation. Since we needed to store a lot of valuable
          information, we decided to pair it up with a MySQL database. For the
          frontend, we implemented the CSS framework Tailwind. Having discovered
          it recently ourselves, it had great prospect of giving us flexible
          freedom in creating a very smooth and elegant styling.
        </p>
      </div>
      <div class="col-span-2 col-start-4 mx-3 pl-4 text-2xl text-slate-300">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/smartdocsystem2.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 col-start-1 mx-3 pl-4 text-2xl text-slate-300">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/smartdocsystem3.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-1 col-start-3 mx-3 pl-4 text-2xl text-slate-300">
        <h2 class="text-lime-400">Challenge</h2>
        <p class="text-lg mt-4 text-justify">
          One of the most challenging pages was the recreation of the Github
          User Rights page where we could set and update rights for any user in
          a very easy and quick way. The entire page was rendered using a simple
          for loop and some clever use of the Laravel framework.
        </p>
      </div>
      <div
        class="col-span-2 col-start-4 mx-3 p-3 pl-4 text-2xl bg-slate-900 rounded-xl text-slate-300"
      >
        <h2 class="text-cyan-400 mb-4 text-right">Clockify Summary</h2>
        <figure>
          <img
            class="object-fit object-center drop-shadow-xl"
            src="~/assets/images/smartdoctimeline.jpg"
            alt=""
          />
        </figure>
        <p class="text-lg text-right">Hours clocked: 167.38 hours</p>
        <p class="text-lg text-right">
          Project Span: September - December 2021
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartDoc',
  data: () => ({
    title: 'Smart Documentation System',
    github: 'https://github.com/jonasclaes/smart-documentation-system',
    images: [
      { id: 1, name: 'Laravel', url: 'https://www.laravel.com/' },
      { id: 2, name: 'PHP', url: 'https://www.php.net/' },
      { id: 3, name: 'MySQL', url: 'https://www.mysql.com/' },
    ],
    poster: 'SmartDoc',
  }),
  mounted() {},
  methods: {},
}
</script>
