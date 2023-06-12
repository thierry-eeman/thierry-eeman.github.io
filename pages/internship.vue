<template>
  <div class="inset-0 max-w-screen-2xl">
    <div
      class="p-10 bg-gradient-to-b from-slate-900 to-slate-800 w-screen min-h-screen px-16"
    >
      <PageHeader />
      <div class="grid grid-cols-5 m-5 p-5">
        <h1 class="col-span-5 col-start-4 text-slate-200 text-4xl">
          My internship
        </h1>
      </div>
      <div id="Company" class="grid grid-cols-3 mx-32">
        <div class="grid-cols-1 col-span-1">
          <h2 class="text-teal-500 mb-3 text-2xl">Company</h2>
          <p class="text-slate-300 text-justify">
            Resillion is a global leader in managed testing services, offering
            quality engineering from initiation to launch. They empower
            businesses to embrace the digital world, delivering success through
            seamless integration, technical security, and industry compliance.
            Trusted by leading organizations worldwide, Resillion is your
            strategic partner for bringing your devices, software, and media
            content to market, ensuring quality outcomes.
          </p>
          <h2 class="text-teal-500 mb-3 text-2xl mt-4">Assignment - Project</h2>
          <p class="text-slate-300 text-justify mb-6">
            During my internship at Resillion, I was assigned a challenging and
            intriguing project: to create a connection between the functional
            testing performed by the Software Quality and Security (SQS)
            department and the security testing executed by the team based in
            the Netherlands. This project aimed to improve efficiency and
            effectiveness by leveraging existing resources and processes in a
            novel way.
          </p>
          <p class="text-slate-300 text-justify">
            The underlying idea was to use the existing test suite, which was
            maintained in Azure DevOps repositories, and align it with the
            security testing procedures. By doing so, we could capitalize on the
            indirect spidering achieved through the functional tests as an
            opportunity to simultaneously scrutinize the application for any
            security vulnerabilities.
          </p>
        </div>
        <div id="Documents" class="col-span-1 px-6 ml-16">
          <div class="grid-cols-1 col-span-1 text-right">
            <h2 class="text-teal-500 mb-3 text-2xl text-left">Documents</h2>
            <p class="text-slate-300 text-justify">
              Here you can find all the documents that were created during my
              internship. They will give you an insight on the entire scope of
              the project and how it tackles the challenge provided by my
              mentors.
            </p>
            <figure class="flex justify-center bg-slate-600 mt-8 py-8">
              <img
                class="object-fill"
                src="~/assets/images/resillion-logo.png"
                width="300"
                height="898"
                alt=""
              />
            </figure>
            <p class="text-slate-300 mt-16 text-lg">
              <span class="font-bold text-left text-blue-500"
                >Project Scope:</span
              >
              <a
                href="/ProjectScope.pdf"
                target="_blank"
                class="hover:text-pink-500"
                >Project scope for the internship</a
              >
            </p>
            <p class="text-slate-300 mt-4 text-lg">
              <span class="font-bold text-left text-rose-500"
                >Project Approach:</span
              >
              <a
                href="/PlanVanAanpak.pdf"
                target="_blank"
                class="hover:text-pink-500"
              >
                Approach to a valid solution</a
              >
            </p>
            <p class="text-slate-300 mt-4 text-lg">
              <span class="font-bold text-left text-lime-500">Planning:</span>
              Overview of the internship phases
            </p>
            <p class="text-slate-300 mt-4 text-lg">
              <span class="font-bold text-left text-emerald-500"
                >Realisation:</span
              >
              In-depth report on my solution
            </p>
            <p class="text-slate-300 mt-4 text-lg">
              <span class="font-bold text-left text-orange-500"
                >Reflection:</span
              >
              <a
                href="/Reflectiedocument.pdf"
                target="_blank"
                class="hover:text-pink-500"
              >
                Reflection on the entire internship</a
              >
            </p>
          </div>
        </div>
        <div id="CompanyPicture" class="col-span-1 px-6 mb-0 mt-6">
          <div class="flex col-span-1 justify-center">
            <img
              class="rounded-full border-4 border-rose-900 saturate-130 object-cover object-right-bottom w-96 h-96"
              src="~/assets/images/resillion-office.jpg"
              width="505"
              height="898"
              alt=""
            />
          </div>
          <PageFooter2 class="content-center ml-16 w-auto pl-8" />
        </div>
      </div>
      <div class="flex justify-end mr-32 mt-8">
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
  name: 'InternshipPage',
}
</script>
