<template>
  <div class="inset-0 max-w-screen-2xl">
    <!-- Section 1 -->
    <div
      class="p-10 grid grid-cols-2 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
    >
      <!-- Background Images -->
      <div id="shapes" class="absolute inset-0">
        <div class="absolute" style="left: 200px; top: 250px">
          <img
            class="rounded-full border-4 border-rose-900 saturate-50 object-cover object-top h-72 w-72"
            src="~/assets/images/Mugshot.jpg"
            width="505"
            height="898"
            alt=""
          />
        </div>
        <!--        <div-->
        <!--          class="z-0 inline-block absolute bg-gradient-to-tr from-slate-800 to-slate-700 overflow-hidden"-->
        <!--          style="width:400px;height:600px;right:80px;top:40px;border-radius:60px;transform:rotate(15deg);">-->
        <!--        </div>-->
        <!--        <div-->
        <!--          class="z-0 opacity-50 inline-block absolute bg-gradient-to-tr from-slate-800 to-slate-700"-->
        <!--          style="width:420px;height:580px;right:90px;top:60px;border-radius:60px;transform:rotate(11deg);">-->
        <!--        </div>-->
        <div
          class="z-0 drop-shadow-xl opacity-40 inline-block absolute bg-gradient-to-tr from-slate-900 to-slate-700 rounded-full rotate-180"
          style="width: 1200px; height: 290px; right: 50px; top: 120px"
        ></div>
        <div
          class="z-0 drop-shadow-xl opacity-40 inline-block absolute bg-gradient-to-tr from-slate-900 to-slate-700 rounded-full"
          style="width: 900px; height: 110px; right: 200px; top: 210px"
        ></div>
        <div
          class="z-0 drop-shadow-2xl opacity-50 inline-block absolute bg-gradient-to-tr from-slate-900 to-slate-700 rounded-full rotate-180"
          style="width: 120px; height: 120px; left: 200px; top: 200px"
        ></div>
        <div
          class="z-0 drop-shadow-2xl opacity-50 inline-block absolute bg-gradient-to-tr from-slate-900 to-slate-700 rounded-full"
          style="width: 50px; height: 50px; left: 140px; top: 120px"
        ></div>
      </div>
      <PageHeader />
      <div
        id="title"
        class="col-span-2 lg:col-span-1 text-slate-200 text-4xl lg:text-6xl text-right h-1/3 rounded-xl p-4 z-10 mt-32 lg:mt-72"
      >
        <h1 class="text-shadow-lg">Hello. I am Thierry.</h1>
        <p class="text-lg lg:text-2xl mt-2">Welcome to my playground.</p>
      </div>
      <div
        id="description"
        class="col-span-2 border-x-2 border-teal-500 lg:col-span-1 text-slate-300 text-4xl lg:text-6xl text-left h-2/6 rounded-xl p-4 z-10 mt-32 lg:mt-80 mx-16"
      >
        <p class="text-lg lg:text-xl p-5 my-4">
          On this website you will find more about me and the projects I work
          on. If you're looking for AI-related content and generative art, you
          have come to the right place.
        </p>
      </div>
    </div>

    <!-- Section 2 -->
    <div
      class="grid grid-cols-2 min-h-auto w-screen bg-gradient-to-r from-rose-900 to-slate-800"
    >
      <div class="absolute">
        <div
          class="z-0 absolute rounded-full bg-gradient-to-l from-rose-900 to-rose-700"
          style="width: 360px; height: 360px; left: 140px; top: 200px"
        ></div>
        <div
          class="z-0 absolute rounded-full bg-gradient-to-r from-rose-900 to-rose-700"
          style="width: 340px; height: 340px; left: 150px; top: 210px"
        ></div>
      </div>
      <div
        class="z-10 border-slate-800 grid grid-cols-2 col-span-1 my-10 p-5 opacity-100 rounded-xl"
      >
        <div class="text-right col-span-1 col-start-2 m-4 p-5 text-slate-300">
          <h2 class="text-6xl">My Projects</h2>
          <p class="pt-10 text-lg">
            Being a part of the Digital Innovation Squad, I have the opportunity
            to work on many projects with real clients.
          </p>
          <p class="pt-5 text-lg">You will find many of these projects here.</p>
        </div>
      </div>
      <div
        class="grid grid-cols-3 col-span-1 my-10 p-5 opacity-100 rounded-xl content-center"
      >
        <div
          class="drop-shadow-xl col-span-2 col-start-2 content-center text-rose-900"
        >
          <NuxtLink
            class="bg-slate-900 hover:bg-rose-900 hover:text-slate-900 transition duration-500 ease-in-out px-10 py-5 rounded-full text-4xl"
            to="/projects"
            >View Projects
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Section 3  Artwork-->
    <div
      class="scroll-auto grid grid-cols-2 min-h-auto w-screen bg-gradient-to-l from-cyan-900 to-slate-800 bg-teal-300"
    >
      <div
        class="grid grid-cols-3 col-span-1 col-start-1 p-5 opacity-100 rounded-xl content-center"
      >
        <div
          class="drop-shadow-xl mx-20 col-span-2 col-start-2 content-center text-gray-800"
        >
          <NuxtLink
            class="bg-slate-300 hover:bg-slate-600 hover:text-slate-300 transition duration-500 ease-in-out px-10 py-5 rounded-full text-4xl"
            to="/artwork"
            >View Artwork</NuxtLink
          >
        </div>
      </div>
      <div
        class="grid grid-cols-4 z-10 border-slate-800 col-span-1 my-10 p-5 opacity-100 rounded-xl"
      >
        <div class="col-span-3 text-left m-2 pr-10 mb-10 text-zinc-900">
          <h2 class="text-6xl">My Artwork</h2>
          <p class="pt-10 text-lg">
            In my spare time I make a lot of freelance artwork. I have a lot of
            Photoshop experience through making birthcards, logo's and artworks
            of combined photos.
          </p>
          <p class="pt-2 text-lg">
            Since I started to learn programming and code, I've also started
            looking into generative art. I hope to one day help to gap the
            bridge between AI and creativity.
          </p>
        </div>
      </div>
    </div>

    <!-- Section 4 -->
    <div
      class="grid grid-cols-2 min-h-auto w-screen bg-gradient-to-l from-slate-900 to-slate-700"
    >
      <div class="absolute max-w-screen">
        <div
          class="z-0 absolute right-0 rounded-full bg-gradient-to-b from-gray-400 to-slate-900"
          style="width: 800px; height: 100px; left: 1000px; top: -50px"
        ></div>
        <div
          class="z-0 absolute rounded-full bg-gradient-to-t from-slate-400 to-gray-900"
          style="width: 760px; height: 70px; left: 1020px; top: -35px"
        ></div>
      </div>
      <div
        class="z-10 border-slate-800 grid grid-cols-2 col-span-1 my-10 p-5 opacity-100 rounded-xl"
      >
        <div class="text-right col-span-1 col-start-2 m-4 p-5 text-slate-300">
          <h2 class="text-6xl">About Me</h2>
          <p class="pt-10 text-lg">
            Curiosity is my nature and at my core you'll find a playful soul. If
            you like to know more about me, this is where you'll find it.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-3 col-span-1 my-10 opacity-100 rounded-xl content-center"
      >
        <div
          class="drop-shadow-xl col-span-2 col-start-2 content-center text-slate-500"
        >
          <NuxtLink
            class="bg-slate-900 hover:bg-slate-400 hover:text-slate-900 transition duration-500 ease-in-out px-10 py-5 rounded-full text-4xl"
            to="/about"
            >Get to know me!
          </NuxtLink>
        </div>
      </div>
    </div>
    <PageFooter class="absolute right-20" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
