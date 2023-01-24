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
          Optimizing Data Management and Analysis for a Chicken Test Farm: The
          Use of a Data Warehouse and PowerBI
        </h2>
        <figure class="w-full mb-5 flex justify-center">
          <img
            src="~/assets/images/Pluimvee (blog intro).png"
            alt="A Glass Egg"
          />
        </figure>
        <h3 class="font-bold mb-3">Introduction</h3>
        <p class="text-lg mb-16 text-justify">
          In a recent project, we were tasked with improving the data management
          and analysis for a chicken test farm in the province of Antwerp. The
          farm houses over 60,000 chickens in large stables, with a section for
          chickens that produce eggs and another for chickens that are meant for
          meat consumption. The stables are split into compartments, with a
          selection of chickens being held under different testing
          circumstances, including environmental and nutritional factors.
        </p>
        <h3 class="font-bold mb-3">Previous situation</h3>
        <p class="text-lg mb-16 text-justify">
          Previously, the data collected from these tests is sent in CSV files
          to a central server and processed in a relational SQL database with
          many nested tables and foreign keys. However, this method of data
          management is not scalable and requires a significant amount of manual
          preprocessing. This makes it difficult to generate thorough reports
          and conduct accurate analysis of the data.
        </p>
        <h3 class="font-bold mb-3">The Solution: Building a Data Warehouse</h3>
        <p class="text-lg mb-3 text-justify">
          To address these issues, we decided to construct a data warehouse
          using an SSIS pipeline in Visual Studio and Python. The data is
          imported into a dimensional model with facts and dimensions, which
          allows for more efficient querying and reporting. This structure also
          makes it easier to add new data or modify existing data without
          affecting the entire system.
        </p>
        <p class="text-lg mb-16 text-justify">
          The data warehouse also enables us to separate the data into facts and
          dimensions, which are the fundamental components of a dimensional data
          model. Facts are measures of the business process, such as the chicken
          weight, fluid and food consumption. Dimensions provide context to the
          facts, such as the time, location, and environment in which the
          measurements were taken. This separation allows for more flexible
          reporting and analysis.
        </p>
        <h3 class="font-bold mb-3 text-justify">
          Implementing PowerBI for Reporting and Analysis
        </h3>
        <p class="text-lg mb-3">
          Once the data warehouse was in place, we utilized PowerBI for
          reporting and analysis. PowerBI is a business intelligence tool that
          allows us to easily connect to the data warehouse and create
          interactive visualizations and reports. With PowerBI, we can quickly
          identify patterns and trends in the data that would have been
          difficult to discern with traditional methods of data analysis.
        </p>
        <p class="text-lg mb-16">
          For example, we were able to create a report that shows the average
          food consumption of chickens by compartment over time. This report
          helped us identify any fluctuations in consumption and make
          adjustments to the testing conditions as necessary. We also created a
          report that shows the loss of chickens (due to death or selection) by
          compartment, which helped us to identify trends and/or outliers.
        </p>
        <h3 class="font-bold mb-3">Conlusion</h3>
        <p class="text-lg mb-16 text-justify">
          Overall, the project was a success in improving the data management
          and analysis for the chicken test farm. The use of a data warehouse
          and PowerBI allowed us to efficiently process and analyze large
          amounts of data, resulting in valuable insights that can be used to
          optimize the testing conditions for the chickens. Additionally, the
          assistance of senior data engineers with extensive experience in the
          field played a crucial role in the success of the project.
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
  name: 'PowerBIPluimvee',
  data: () => ({
    title: 'BI for Chicken Testfarm',
    github: '',
    images: [
      {
        id: 1,
        name: 'Visual Studio',
        url: 'https://visualstudio.microsoft.com/',
      },
      {
        id: 2,
        name: 'PowerBI',
        url: 'https://powerbi.microsoft.com/nl-nl/',
      },
      {
        id: 3,
        name: 'SSIS',
        url: 'https://powerbi.microsoft.com/nl-nl/',
      },
      {
        id: 4,
        name: 'Python',
        url: 'https://www.python.org/',
      },
      {
        id: 5,
        name: 'MySQL',
        url: 'https://www.mysql.com/',
      },
    ],
    poster: '',
  }),
  mounted() {},
  methods: {},
}
</script>

<style scoped></style>
