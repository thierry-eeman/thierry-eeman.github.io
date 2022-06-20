<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-4">
      <PageFooter class="bottom-80 right-10" />
      <SkillTree :images="images" />
      <h1 class="col-span-2 col-start-4 mb-5 text-slate-200 text-4xl">
        De Digitale Leescoach
      </h1>
      <div class="col-span-2 mx-3 pl-4 text-slate-200 text-2xl">
        <h2 class="text-lime-400">Project Overview</h2>
        <p class="text-lg mt-4 text-justify">
          My first project for Digital Innovation was a collaboration with
          another department of Thomas More. The department of Education had
          been working on a school project to improve children and teacher in
          the field of comprehensive reading. They started organizing workshops
          for schools while logging all the knowledge and pedagogical activities
          in files on their harddrives. The next step for this ambitious project
          was to share this knowledge and provide access to these materials for
          the broader audience. This is were I came into play.
        </p>
      </div>
      <div class="col-span-3 mx-3 pl-4">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/Leescoach website screenshot 1.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 col-start-1 mx-3 pl-4">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/Leescoach website screenshot 2.jpg"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-2 mx-3 pl-4 text-2xl">
        <h2 class="text-amber-400">WordPress Kadence</h2>
        <p class="text-slate-200 text-lg mt-4 text-justify">
          The intention from the start was to create a website that would look
          stunning and could easily be maintained by people without a background
          in IT. We decided to go with the Kadence Wordpress theme for its
          versatility and good customer support. It also provided a one-time
          lifetime support bundle, which ensures the longevity of the
          website.&nbsp; The main focus of the website was the Quickscan and the
          dynamic database with easy filtering.
        </p>
      </div>
      <div class="col-span-1 mx-3 pl-4 text-2xl">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl pt-8"
            src="~/assets/images/Kadence Logo.png"
            alt=""
          />
        </figure>
      </div>
      <div class="col-span-3 col-start-1 pl-4 text-2xl">
        <p class="text-slate-200 text-lg mt-4 text-justify">
          The biggest challenge for this project was inserting the custom code
          snippets for the Chart.js visualisation as well as the custom PDF
          download functionality. This custom functionality was much needed and
          buying plugins would imply the use budget that could be used elsewhere
          (especially because the functionality was only for a very specific
          use). I solved it using the chart.js library to make a dynamic
          polarchart that updates live when the values of the questionnaire are
          updated.
        </p>
        <p class="text-slate-200 text-lg mt-4 text-justify">
          The website is now up and running and is being used by many people in
          the field. The contents of the database will be regularly updated as
          many students will contribute to it in the future.
        </p>
      </div>
      <div class="col-span-2 mx-3 pl-4 text-2xl">
        <figure>
          <img
            class="object-cover object-left-top rounded-xl drop-shadow-xl"
            src="~/assets/images/Leescoach website screenshot 4.jpg"
            alt=""
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeesCoach',
  data: () => ({
    images: [
      { id: 1, name: 'JavaScript', url: 'https://www.javascript.com/' },
      { id: 2, name: 'wordpress', url: 'https://wordpress.com/nl/' },
    ],
  }),
  mounted() {},
  methods: {},
}
</script>
