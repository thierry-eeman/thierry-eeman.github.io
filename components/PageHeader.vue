<template>
  <nav class="bg-transparent z-10 col-span-2 mr-5 pb-5 h-1/6">
    <div class="w-full mx-auto px-2 sm:px-6 lg:px-6">
      <div class="relative flex items-center justify-between">
        <div class="pl-6 text-lg text-slate-400">
          <p>WHITE MOOSE GRAPHICS</p>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start lg:justify-end"
        >
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block h-8 w-auto"
              src=""
              alt=""
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <NuxtLink
                to="/"
                class="text-slate-400 hover:text-teal-300 px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page">Home</NuxtLink>
              <NuxtLink
                to="/projects"
                class="text-slate-400 hover:text-orange-300 px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page">Projects</NuxtLink>
              <NuxtLink
                to="/artwork"
                class="text-slate-400 hover:text-pink-300 px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page">Artwork</NuxtLink>
              <NuxtLink
                to="/about"
                class="text-slate-400 hover:text-lime-300 px-3 py-2 rounded-md text-sm font-medium"
                aria-current="page">About</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 text-right">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <NuxtLink
          to="/"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Home</NuxtLink>
        <NuxtLink
          to="/projects"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Projects</NuxtLink>
        <NuxtLink
          to="/artwork"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">Artwork</NuxtLink>
        <NuxtLink
          to="/about"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          aria-current="page">About</NuxtLink>
      </div>
    </div>
  </nav>
</template>
