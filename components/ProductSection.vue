<template>
  <section class="my-12 lg:my-24">
    <div class="container">
      <!-- Title -->
      <h2 data-aos="fade-up" class="text-center">
        Entdecke weitere Produkte
      </h2>

      <!-- Products Wrapper -->
      <div
        id="products"
        data-aos="fade-up"
        class="mt-12 grid grid-cols-12 gap-y-8 sm:gap-8"
      >
        <!-- Products Container -->
        <div
          v-for="(item, i) in items"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="100 * i"
          class="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 flex flex-col space-y-6 text-center items-center"
        >
          <!-- Image -->
          <a
            href="#products"
            class="flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden"
          >
            <img
              class="hover:scale-110 transition duration-500 w-full"
              :src="item.image.url"
            />
          </a>

          <!-- Name -->
          <p class="font-medium" v-text="item.name" />

          <!-- Actions -->
          <div class="flex space-x-2">
            <Button white>entdecken</Button>
            <Button white>Kaufen</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            name: 'HUAWEI MatePad Pro',
            image: { url: '/images/tablet.webp' },
          },
          {
            name: 'HUAWEI WATCH 3 Pro',
            image: { url: '/images/smartwatch.webp' },
          },
          {
            name: 'HUAWEI FreeBuds 4',
            image: { url: '/images/earbuds.webp' },
          },
          {
            name: 'HUAWEI MateView',
            image: { url: '/images/monitor.webp' },
          },
        ],
      };
    },
  };
</script>
