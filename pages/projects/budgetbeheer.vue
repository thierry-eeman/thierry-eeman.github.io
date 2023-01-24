<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 mx-64 p-5 gap-y-10">
      <ProjectIntro
        :title="title"
        :github="github"
        :images="images"
        :poster="poster"
      />
      <div class="col-span-5 pl-4 mx-48 text-slate-200 text-2xl">
        <h2 class="text-center font-bold text-lime-300 mb-8">
          The Wakosta App Expansion: A journey through innovation, challenges
          and setbacks.
        </h2>
        <figure class="w-full mb-5 flex justify-center">
          <img
            src="~/assets/images/budgetbeheer (blog intro).png"
            alt="A piggybank"
          />
        </figure>
        <h3 class="font-bold mb-3">
          Exploring the potential of an idea for financial predictability
        </h3>
        <p class="text-lg mb-16 text-justify">
          Last year, I had a vision to simplify savings and make budgeting more
          visual and flexible. My school coaches endorsed the idea and I was
          able to find an organization called CEBUD that specialized in
          budgeting and financial stress. They were excited to work on the
          project with me and we quickly gained the attention of BIZ Flanders,
          the organization responsible for creating the Wakosta mobile
          application.
        </p>
        <h3 class="font-bold mb-3">Being a SCRUM Master</h3>
        <p class="text-lg mb-16 text-justify">
          As the SCRUM master of the project, my main responsibilities were to
          lead and manage the development team, ensure that the project was
          running smoothly and efficiently, and to act as a liaison between the
          team and the stakeholders. One of my key tasks was to lead the daily
          stand-up meetings, where the team would discuss progress and any
          issues that needed to be addressed. I also facilitated the sprint
          planning, review, and retrospective meetings, which helped the team
          stay on track and make adjustments as needed. I was also responsible
          for managing the project's backlog, which involved prioritizing tasks
          and ensuring that the team had a clear understanding of what was
          expected of them. Another important responsibility was to remove any
          obstacles that the team may encounter during the development process,
          to ensure that the project was progressing as planned. I also had to
          work closely with the stakeholders, such as CEBUD and BIZ Flanders, to
          ensure that their needs were being met and that they were satisfied
          with the progress of the project.
        </p>
        <h3 class="font-bold mb-3">The Power of Ionic Framework</h3>
        <p class="text-lg mb-16 text-justify">
          Since the application was already written in Ionic Angular, we knew we
          would have to get skilled in its inner workings. The Ionic framework
          is a popular open-source framework for building cross-platform mobile
          applications. It allows developers to use web technologies such as
          HTML, CSS, and JavaScript to build apps that can run on both Android
          and iOS devices. The framework provides a set of pre-built UI
          components, such as forms and buttons, that can be easily customized
          to match the design of the app. Additionally, Ionic has a large and
          active community, which means developers can find resources and
          support when working on their projects. By using Ionic as the
          framework for our project, we were able to create a visually
          attractive and user-friendly app that could run on a wide range of
          devices.
        </p>
        <h3 class="font-bold mb-3 text-justify">
          Challenges and lessons learned
        </h3>
        <p class="text-lg mb-16">
          However, issues arose with the original developer. The framework and
          libraries were outdated, and it became impossible to write the
          expansion due to the workload and legal concerns. Despite the
          setbacks, I am grateful for the opportunity to work on this project
          and the skills I was able to gain as the SCRUM master. I am excited to
          see what the future holds for the Wakosta app and similar projects.
        </p>
        <h3 class="font-bold mb-3">
          Conlusion: Bringing an idea to life is often a long journey
        </h3>
        <p class="text-lg mb-16 text-justify">
          In conclusion, The Wakosta App Expansion project was a great
          opportunity to work on a financial app and learn the skills of
          leadership and delegation. Although we faced some challenges, I
          believe that the potential of the Ionic framework for financial apps
          is huge, and I hope to see more innovative projects in this field in
          the future.
        </p>
      </div>
    </div>
    <section class="overflow-hidden text-gray-700 mx-64">
      <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="~/assets/images/NLP HuggingFace.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BudgettingApp',
  data: () => ({
    title: 'Piggybank Budget Application',
    github: '',
    images: [
      {
        id: 1,
        name: 'Ionic',
        url: 'https://ionicframework.com/',
      },
    ],
    poster: '',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
