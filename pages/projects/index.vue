<template>
  <div>
    <div
      class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
    >
      <PageHeader />
      <div class="grid grid-cols-5 m-5 mx-32 p-5 gap-4">
        <h1 class="col-span-5 col-start-4 text-slate-200 text-4xl">
          Project Overview
        </h1>
        <h2 class="col-span-5 col-start-4 text-right text-teal-200 mr-24">
          On this page you can find all the important projects that I've worked
          on during my 3 year bachelor education at the IT Factory in Thomas
          More Geel Belgium.
        </h2>
        <!-- Row 2 -->
        <!-- Card 1 -->
        <div
          class="col-span-4 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/chatbotgpt">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/ChatGPT.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Using ChatGPT to streamline my portfolio writing process.
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  An NLP language model trained to interact in a conversational
                  way.
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
        <OrbDivider />

        <!-- Row 2 -->
        <OrbDivider class="col-start-2" />
        <!-- Card 1 -->
        <div
          class="col-span-3 col-start-3 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/midjourney">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
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
                  An AI model trained to generate images based on textual
                  prompts.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

        <!-- Row 1 -->
        <!-- Card 1 -->
        <div
          class="col-span-2 col-start-1 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/budgetbeheer">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/Budget.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    WAKOSTA Budget Application.
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A shutdown project on the idea of digital piggybanks.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-yellow-800"
                >
                  On hold
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
        <OrbDivider />
        <!-- Card 2 -->
        <div
          class="col-span-2 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/swarmintelligence">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/Swarm.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Swarm Intelligence.
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  How will robots and machines communicate and divide tasks
                  among them in the future?
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

        <!-- Row 2 -->
        <OrbDivider class="col-start-2" />
        <!-- Card 1 -->
        <div
          class="col-span-3 col-start-3 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/pluimvee">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
                  src="~/assets/images/Chicken.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Data Analysis for Chicken Testfarm.
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A powerBI dashboard with data warehouse and SSIS pipeline for
                  generating data reports on chicken growth.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

        <!-- Row 1 -->
        <!-- Card 1 -->
        <div
          class="col-span-2 col-start-1 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/sense2exion">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/Sense2Exion.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Mobilab Sense2Exion
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A Fullstack Flask application with Neo4J database for
                  filtering exoskeletons.
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
        <OrbDivider />
        <!-- Card 2 -->
        <div
          class="col-span-2 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/gpucluster">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/GPU.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    GPU Cluster
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A Flatcar Linux Kubernetes cluster with GPU power.
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

        <!-- Row 2 -->
        <!-- Card 1 -->
        <div
          class="col-span-4 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4 outline-none active:outline-none focus:outline-none"
        >
          <NuxtLink to="/projects/leescoach">
            <div
              class="grid grid-cols-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-2">
                <img
                  class="rounded-l-lg object-cover object-top h-56 w-10/12"
                  src="~/assets/images/Leescoach.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Digitale Leescoach
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A website made for Thomas More to help schools develop better
                  reading strategies.
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
        <OrbDivider />

        <!-- Row 2 -->
        <OrbDivider class="col-start-2" />
        <!-- Card 2 -->
        <div
          class="col-span-3 col-start-3 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/smartdoc">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
                  src="~/assets/images/DeltaTechnics.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Smart Documentation System
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  A user management platform for maintaining up-to-date
                  documentation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

        <!-- Row 3 -->
        <!-- Card 3 -->
        <div
          class="col-span-2 col-start-1 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/nlpstreamlit">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-left h-56 w-96"
                  src="~/assets/images/NLP.png"
                  width="120"
                  height="200"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Terms of Service Summarization
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  An NLP approach to summarizing legal documents to a list of
                  bullet points.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-yellow-800"
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
        <OrbDivider />
        <!-- Card 4 -->
        <div
          class="col-span-2 col-start-4 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/racefuture">
            <div
              class="grid grid-cols-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
                  src="~/assets/images/RaceToTheFuture.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-1">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Race to the Future
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  An AI autonomous driving car Competetion at Corda Campus
                  Hasselt.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

        <!-- Row 4 -->
        <OrbDivider class="col-start-2" />
        <!-- Card 2 -->
        <div
          class="col-span-3 col-start-3 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/concreteprinter">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
                  src="~/assets/images/Concrete Printer.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Leflab Concrete Printer
                  </h5>
                </a>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  In collaboration with three other disciplines, we orchestrated
                  a successful migration of the Kamp C Cobod conrete printer to
                  Thomas More.
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  We helped create custom slicer software and data
                  visualisation.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
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

        <!-- Row 5 -->
        <OrbDivider class="col-start-1" />
        <!-- Card 2 -->
        <div
          class="col-span-3 col-start-2 hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-500 rounded-md p-4"
        >
          <NuxtLink to="/projects/adventofcode">
            <div
              class="grid grid-cols-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#" class="col-span-1">
                <img
                  class="rounded-l-lg object-cover object-center h-56 w-10/12"
                  src="~/assets/images/adventofcode.jpg"
                  alt=""
                />
              </a>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h5
                    class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                  >
                    Advent Of Code
                  </h5>
                </a>
                <p class="font-normal text-gray-700 dark:text-gray-400">
                  A fantastic puzzle coding contest to enhance your problem
                  solving skills.
                </p>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  I promised myself that I would achieve all 400 stars by the
                  end of 2023 and document them on this website. Stay tuned.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  In Progress
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
        <OrbDivider class="col-start-5" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectIndex',
}
</script>

<style lang="scss" scoped></style>
