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
          Improving Exoskeleton Filtering on Mobilab's Website: An Insider's
          Perspective
        </h2>
        <figure class="w-full mb-5 flex justify-center">
          <img
            src="~/assets/images/Sense2Exion (blog intro).png"
            alt="Robot Exoskeleton"
          />
        </figure>
        <h3 class="font-bold mb-3">Introduction</h3>
        <p class="text-lg mb-16 text-justify">
          As a member Digital Innovation, we were tasked with expanding the
          website of the Thomas More research group Mobilab with a filter
          functionality for their exoskeletons. Mobilab specializes in
          innovation within the healthcare sector. The website is a full-stack
          application built using the Flask framework, Neo4J database,
          TailwindCSS, DaisyUI, and deployed to an Azure cloud using CI/CD. In
          this blog post, I will share my experiences working on this project,
          including the challenges we faced, the solutions we implemented, and
          the end result.
        </p>
        <h3 class="font-bold mb-3">Challenges and Solutions</h3>
        <p class="text-lg mb-3 text-justify">
          When we first began working on the project, we quickly identified
          several issues with the existing codebase. One of the most significant
          issues was the presence of hardcoded login credentials, which posed a
          major security risk. Additionally, we found that the backend code was
          not scalable or adaptable for future changes.
        </p>
        <p class="text-lg mb-16 text-justify">
          To address these issues, we made the decision to rewrite the backend
          code before moving forward with the filter functionality. This
          required a significant amount of work, but it ultimately resulted in a
          much more secure and scalable website. Additionally, we had to learn
          Cypher language to write the necessary queries for the database
          lookups.
        </p>
        <h3 class="font-bold mb-3">Filter Functionality</h3>
        <p class="text-lg mb-16 text-justify">
          With the backend issues resolved, we were able to focus on the task at
          hand: adding a filter functionality to the website. We developed a
          user-friendly search experience that allows users to filter
          exoskeletons by specific criteria such as weight capacity and range of
          motion. This feature greatly improves the user's experience when
          searching for a specific exoskeleton on the website.
        </p>
        <h3 class="font-bold mb-3 text-justify">
          Scalability and Adaptability
        </h3>
        <p class="text-lg mb-16">
          One of the most significant benefits of rewriting the backend code was
          the improved scalability and adaptability of the website. We
          implemented a Github workflow that automatically builds and deploys
          the website whenever changes are merged with the main branch. This
          makes it much easier to make future changes and updates to the
          website. Additionally, the new backend code is much more modular,
          which makes it easier to add new functionality in the future.
        </p>
        <h3 class="font-bold mb-3">Conclusion</h3>
        <p class="text-lg mb-16 text-justify">
          In conclusion, we were able to successfully improve the filtering
          functionality on Mobilab's website while also addressing major
          security issues and improving the scalability and adaptability of the
          codebase. Through this project, we learned the importance of
          addressing underlying issues before moving forward with new features
          and the importance of scalability and adaptability in website
          development.
        </p>
        <h3 class="font-bold mb-3">Post-Script</h3>
        <p class="text-lg mb-16 text-justify">
          This project continues to be an ongoing effort, with plans for further
          improvements and new features in the future. We also acknowledge and
          appreciate the hard work and dedication of our team members in
          delivering this project. Overall this project was a great learning
          experience and a good opportunity to work on a real-world project and
          use our skills to provide solutions for real-world problems.
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
                src="~/assets/images/Sense2Exion.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="~/assets/images/Sense2Exion (blog bottom 2).jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/3">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full h-full rounded-lg"
                src="~/assets/images/Sense2Exion (blog bottom 3).png"
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
  name: 'Sense2Exion',
  data: () => ({
    title: 'Mobilab Exoskeleton Filter',
    github: '',
    images: [
      {
        id: 1,
        name: 'Flask',
        url: 'https://flask.palletsprojects.com/en/2.2.x/',
      },
      {
        id: 2,
        name: 'Neo4J',
        url: 'https://neo4j.com/',
      },
      {
        id: 3,
        name: 'Tailwind',
        url: 'https://tailwindcss.com/',
      },
      {
        id: 4,
        name: 'DaisyUI',
        url: 'https://daisyui.com/',
      },
      {
        id: 5,
        name: 'Azure',
        url: 'https://azure.microsoft.com/nl-nl',
      },
    ],
    poster: '',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
