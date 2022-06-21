<template>
  <div
    class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen"
  >
    <PageHeader />
    <div class="grid grid-cols-5 m-5 p-5 gap-y-20">
      <ProjectIntro
        :title="title"
        :github="github"
        :images="images"
        :poster="poster"
      />
      <div class="col-span-2 mx-3 pl-4 text-slate-200 text-2xl">
        <h2 class="text-lime-400">Project Overview</h2>
        <p class="text-lg mt-4 text-justify">
          My first project for Digital Innovation was a collaboration with
          another department of Thomas More. The department of Education had
          been working on a school project to improve children and teacher in
          the field of comprehensive reading. They started organizing workshops
          for schools while logging all the knowledge and pedagogical activities
          in files on their harddrives. The next step for this ambitious project
          was to share this knowledge and provide access to these materials for
          the broader audience. This is were I came into play.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartDoc',
  data: () => ({
    title: 'Legal Text Summarization',
    github: 'private',
    images: [
      { id: 1, name: 'Python', url: 'https://www.laravel.com/' },
      { id: 2, name: 'Streamlit', url: 'https://www.php.net/' },
      { id: 3, name: 'MySQL', url: 'https://www.mysql.com/' },
      { id: 4, name: 'AI', url: 'https://' },
    ],
    poster: 'PlainLegal',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
