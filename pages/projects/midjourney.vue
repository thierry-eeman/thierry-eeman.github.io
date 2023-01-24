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
          Unleash Your Creativity with Midjourney - The AI Image Generator
        </h2>
        <figure class="w-full mb-5 flex justify-center">
          <img src="~/assets/images/Midjourney.jpg" alt="Girl in a jacket" />
        </figure>
        <h3 class="font-bold mb-3">Revolutionary content creation</h3>
        <p class="text-lg mb-16 text-justify">
          Are you tired of searching for the perfect image for your projects
          only to find out it's copyrighted? Look no further than Midjourney, an
          artificial intelligence image generator that allows users to create
          unique and copyright-free images for their websites or other projects.
          The tool can be accessed through Discord, a server chat application,
          where users can use the bot to create images using the /imagine
          command.
        </p>
        <h3 class="font-bold mb-3">Benefits of AI based image generation</h3>
        <p class="text-lg mb-16 text-justify">
          The use of an AI image generator like Midjourney has a significant
          impact on the workflow of content creation. It allows users to be more
          creative and to add style to any client demand. The images generated
          are also copyright-free, which means that users do not have to worry
          about infringing on any copyright laws. This makes the process of
          creating images much more efficient and cost-effective.
        </p>
        <h3 class="font-bold mb-3">How it works</h3>
        <p class="text-lg mb-16 text-justify">
          The /imagine command allows users to enter a prompt using plain
          English words to describe the image they would like to create. This
          can include things like the subject of the image, the style, and the
          color scheme. There are also a number of optional parameters that can
          be set, such as the seed (for reproducability), quality and aspect
          ratio of the image. Once the prompt is entered, the bot generates four
          ideas based on the description. This allows users to explore different
          options and find the one that best fits their needs. The bot also
          allows users to create further variations of the generated results,
          which can be helpful for generating more inspiration.
        </p>
        <h3 class="font-bold mb-3 text-justify">
          High-Resolution and Copyright-Free Images at Your Fingertips
        </h3>
        <p class="text-lg mb-16">
          If an image is entirely to the user's liking, the bot can upscale it
          to a high resolution end result. This means that the image can be used
          for larger projects, such as billboards or print advertisements,
          without any loss of quality.
        </p>
        <h3 class="font-bold mb-3">
          Conlusion: Take Your Projects to the Next Level with Midjourney
        </h3>
        <p class="text-lg mb-16 text-justify">
          In conclusion, Midjourney is an innovative AI image generator that
          offers a wide range of possibilities for your projects, it's easy to
          use interface, and the option to upscale the images to high
          resolution, makes it a great tool for any content creator. It is not
          only a great way to increase efficiency, creativity, and
          cost-effectiveness in the content creation process but also allows you
          to explore new possibilities, think outside the box and add a unique
          touch to your projects. If you're looking to add more creativity and
          flair to your content, give Midjourney a try, you won't regret it!
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
  name: 'MidjourneyImageGenerator',
  data: () => ({
    title: 'Midjourney Image Generator',
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
