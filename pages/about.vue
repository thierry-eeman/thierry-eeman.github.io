<template>
  <div class="inset-0 max-w-screen-2xl">
    <div
      class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
    >
      <PageHeader />
      <div class="grid grid-cols-5 m-5 p-5">
        <h1 class="col-span-5 col-start-4 text-slate-200 text-4xl">
          Nice to meet you!
        </h1>
      </div>
      <div id="AboutMe" class="grid grid-cols-3">
        <div class="grid-cols-1 col-span-1">
          <div class="flex col-span-1 justify-center">
            <img
              class="rounded-full border-4 border-rose-900 saturate-130 object-cover object-right-bottom h-96 w-96"
              src="~/assets/images/Mugshot3.jpg"
              width="505"
              height="898"
              alt=""
            />
          </div>
          <PageFooter2 class="content-center ml-16 w-auto pl-16" />
        </div>
        <div id="MyLife" class="col-span-1 px-6 mr-8">
          <h2 class="text-teal-500 mb-3 text-2xl">Who am i?</h2>
          <p class="text-slate-300 text-justify">
            I'm a 39-year old student at the IT Factory in Thomas More Geel,
            Belgium. At the moment I'm in my final stretch to graduate as an IT
            professional, with a special interest in Artifical Intelligence and
            DevOps.
          </p>
          <p class="text-slate-300 mt-5 text-justify">
            As a devoted father of two young children, I like to divide my time
            between writing code, expressing myself creatively and being a
            family man. I have a very curious and open mind that likes to look
            at the world through playful eyes. I'm always seeking for answers
            and asking the right questions to get me there.
          </p>
          <p class="text-slate-300 mt-5 text-justify">
            Up until three years ago, I was a devoted teacher in primary school.
            Although I loved working with young children, asking questions with
            them and seeking answers together, I also found that I needed to be
            challenged more myself. I always loved working on and with computers
            and solving puzzles and difficult challenges.
          </p>
          <p class="text-slate-300 mt-5 text-justify">
            Life is a cycle of discovery and self-discovery, of new perceptions.
            I took the leap, who knows where the road will take me...
          </p>
        </div>
        <div id="WhatDefinesMe" class="col-span-1 px-6 mb-0">
          <h2 class="text-teal-500 mb-3 text-2xl">Me in words.</h2>
          <div class="flex col-span-1 justify-center">
            <img
              src="~/assets/images/word-cloud.png"
              alt=""
              class="object-contain"
              width="500"
            />
          </div>
          <div id="MyCarreer">
            <h2 class="text-teal-500 mb-3 mt-12 text-2xl">My Carreer.</h2>
            <a href="/Curriculum Vitae (2023) - Thierry Eeman.pdf" download="">
              <p
                class="text-pink-600 text-xl text-center mt-5 border-teal-500 border rounded-xl py-6"
              >
                Download my curriculum vitae here.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="flex justify-end mr-32">
        <blockquote class="pr-10 text-end">
          <p class="text-orange-500 opacity-70 text-3xl italic mb-3">
            "If you want something you never had, you have to do something you
            never did."
          </p>
          <cite class="text-slate-300 pr-16">~ Thomas Jefferson ~</cite>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkPage',
}
</script>
