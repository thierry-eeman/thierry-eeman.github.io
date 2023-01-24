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
          <img
            src="~/assets/images/GPU Cluster (blog intro).png"
            alt="Girl in a jacket"
          />
        </figure>
        <h3 class="font-bold mb-3">Introduction</h3>
        <p class="text-lg mb-16 text-justify">
          In today's data-driven world, the ability to process large amounts of
          data quickly and efficiently is crucial. One way to achieve this is by
          using a GPU-cluster, a group of computers that work together to
          perform complex calculations. In this project, I set up a GPU-cluster
          consisting of 18 computers, utilizing Flatcar Linux and Kubernetes.
          The cluster consisted of 9 dual-GPU computers with NVIDIA Quadro K620
          GPUs and 9 CPU computers for more general tasks. Utilizing CoreOS
          Ignition files, which are JSON files that describe the desired state
          of the system, I was able to set up the operating system and install
          Kubernetes onto the worker nodes, bootstrapping the entire cluster.
        </p>
        <h3 class="font-bold mb-3">Configuration of the cluster</h3>
        <p class="text-lg mb-3 text-justify">
          Jonas Claes, a fellow student, was the one responsible for the
          confiuration of the cluster itself. However, being very curious by
          nature, I decided to be a close companion, learning from what Jonas
          was doing and understanding the steps that were needed to create a
          Kubernetes cluster with a master and workers. For practice purposes, I
          set up a MicroK8s cluster with two workers on my home server, which is
          a Ubuntu distribution running a Proxmox server. I created several
          virtual machines to emulate a real cluster environment.
        </p>
        <p class="text-lg mb-16 text-justify">
          The detailed setup of the real GPU-cluster can be found at the website
          of Jonas Claes (https://www.jonasclaes.be).
        </p>
        <h3 class="font-bold mb-3">Hashtopolis Cryptowallet Cracking</h3>
        <p class="text-lg mb-3 text-justify">
          Hashtopolis is an open-source distributed password cracking tool that
          utilizes a central server to distribute cracking tasks to multiple
          connected clients, or "agents." The Hashtopolis server is responsible
          for managing the cracking task and distributing the workload to the
          connected agents.
        </p>
        <p class="text-lg mb-3 text-justify">
          When setting up the Hashtopolis server, the administrator first
          configures the server's settings, such as the location of the
          hashlists and other cracking tools to be used. The administrator then
          sets up the agents, which are typically individual computers or
          clusters that have been configured to connect to the server and
          perform cracking tasks.
        </p>
        <p class="text-lg mb-16 text-justify">
          Once the server and agents are set up, the administrator can create a
          new cracking task and specify the target hash, the type of hash, and
          the cracking method to be used. The server then distributes the task
          to the connected agents, who begin attempting to crack the password
          using the specified method and hashlists. As each agent completes its
          task, it sends the results back to the server, which keeps track of
          the progress and updates the task's status.
        </p>
        <h3 class="font-bold mb-3 text-justify">Utilizing the GPU cluster</h3>
        <p class="text-lg mb-16">
          In your case, we set up a GPU-cluster to handle the processing power
          and used the Hashtopolis server and agents to perform the cracking
          tasks. The Hashtopolis server distributed the cracking task to the
          agents, which used the GPU-cluster to perform the computationally
          expensive cracking process. Once the password is cracked, the agent
          willd sent the results back to the server, which will then inform us
          that the task is done.
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
  name: 'GpuCluster',
  data: () => ({
    title: 'GPU cluster for Cryptowallet',
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
