<template>
  <footer class="py-12 lg:py-24 bg-black text-white">
    <div class="container" data-aos="fade-up">
      <div class="grid grid-cols-12 space-y-8 sm:space-y-0">
        <div
          v-for="section in sections"
          :key="section.title"
          class="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-2"
        >
          <p
            class="mb-4 font-bold text-lg"
            v-text="section.title"
          />
          <ul class="space-y-1.5">
            <li
              v-for="item in section.items"
              :key="item.label"
            >
              <a
                class="hover:text-red-600 transition duration-100"
                href="#"
                v-text="item.label"
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        class="my-12 py-12 border-t border-b border-white/40 flex space-x-2"
      >
        <div
          v-for="i in 4"
          :key="i"
          class="w-10 h-10 rounded-full bg-white/60"
        ></div>
      </div>

      <div>
        <p class="text-base">
          Diese Seite steht in keiner Verbindung zu HUAWEI
          oder Google.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        sections: [
          {
            title: 'HUAWEI',
            items: [
              {
                label: 'Startseite',
              },
              {
                label: 'Produkte',
              },
              {
                label: 'Support',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Q&A',
              },
              {
                label: 'Rückruf',
              },
              {
                label: 'Live Chat',
              },
            ],
          },
        ],
      };
    },
  };
</script>
