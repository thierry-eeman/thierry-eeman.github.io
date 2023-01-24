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
          Exploring Swarm Intelligence: How Simple Robots Can Achieve Complex
          Tasks
        </h2>
        <figure class="w-full mb-5 flex justify-center">
          <img
            src="~/assets/images/Swarm Intelligence (blog intro).png"
            alt="Two robot wasps"
          />
        </figure>
        <h3 class="font-bold mb-3">Introduction</h3>
        <p class="text-lg mb-16 text-justify">
          Swarm intelligence is a field of study that aims to understand the
          behavior of large groups of simple agents that work together to
          accomplish complex tasks. These agents, or "swarm members," are able
          to interact with each other and with their environment in simple ways,
          but through their interactions, they are able to accomplish tasks that
          would be impossible for an individual agent.
        </p>
        <h3 class="font-bold mb-3">Swarm Intelligence in the Animal Kingdom</h3>
        <p class="text-lg mb-16 text-justify">
          One example of swarm intelligence in the animal kingdom is the
          behavior of a flock of birds. Each bird in the flock is able to make
          simple decisions based on the position and velocity of the birds
          around it. Through these interactions, the flock is able to move in
          coordinated ways, such as changing direction or avoiding obstacles,
          without any one bird having a complete picture of the flock's
          behavior.
        </p>
        <h3 class="font-bold mb-3">
          Applying Swarm Intelligence to the Robocup Project
        </h3>
        <p class="text-lg mb-16 text-justify">
          The Robocup project is a competition in which teams of autonomous
          robots play a soccer match indoors on a small pitch. The goal of the
          project is to develop robots that can work together as a team to
          accomplish the task of playing soccer. To achieve this goal, the
          robots must be able to interact with each other and with the ball in
          simple ways, just like the birds in a flock.
        </p>
        <h3 class="font-bold mb-3 text-justify">Swarm Algorithms</h3>
        <p class="text-lg mb-16">
          In my project, I explored the concept of swarm intelligence
          theoretically and analyzed how it could be applied to the Robocup
          project. I studied different algorithms that have been developed to
          enable groups of agents to work together, such as consensus
          algorithms, flocking algorithms, and swarm optimization algorithms. I
          also looked at the challenges that need to be overcome in order to
          apply swarm intelligence to the Robocup project, such as dealing with
          limited communication, uncertainty, and fault-tolerance.
        </p>
        <h3 class="font-bold mb-3">Conlusion</h3>
        <p class="text-lg mb-16 text-justify">
          Overall, the Robocup project is an exciting application of swarm
          intelligence, and it is fascinating to see how simple interactions
          between robots can lead to complex and coordinated behavior. The field
          of swarm intelligence is still in its early stages, and there is much
          more to be discovered about how groups of agents can work together to
          accomplish tasks.
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
  name: 'SwarmIntelligence',
  data: () => ({
    title: 'Swarm Intelligence Theory',
    github: '',
    images: [
      {
        id: 1,
        name: 'Midjourney',
        url: 'https://midjourney.com/',
      },
    ],
    poster: '',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
