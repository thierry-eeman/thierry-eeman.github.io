<template>
  <div
    class="col-span-2 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
  >
    <NuxtLink to="/projects/midjourney">
      <div
        class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#" class="col-span-2">
          <img
            class="rounded-l-lg object-cover object-top h-56 w-10/12"
            src="~/assets/images/Midjourney.jpg"
            alt=""
          />
        </a>
        <div class="p-5 col-span-2">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Midjourney Image Generator
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            An AI model trained to generate images based on prompts.
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-yellow-800"
          >
            Finished
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Project Title',
    },
    description: {
      type: String,
      required: false,
      default: '',
    },
    width: {
      type: String,
      required: true,
      default: 'col-span-2',
    },
  },
}
</script>
