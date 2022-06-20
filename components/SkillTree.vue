<template>
  <div class="col-span-3">
    <h2 class="text-fuchsia-400">Trained Skills</h2>
    <figure>
      <img
        v-for="image in images"
        :key="image.id"
        :src="`~/assets/images/logo/${image.name}.png`"
        :alt="`${image.name}`"
      />
    </figure>
  </div>
</template>
