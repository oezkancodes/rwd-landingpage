<template>
  <section class="py-12 lg:py-24">
    <div class="container">
      <!-- Title -->
      <h2 data-aos="fade-up" class="text-center">
        Entdecke weitere Produkte
      </h2>

      <!-- Products Wrapper -->
      <div
        id="products"
        data-aos="fade-up"
        class="mt-12 grid grid-cols-4 gap-8"
      >
        <!-- Products Container -->
        <div
          v-for="(item, i) in items"
          :key="i"
          data-aos="fade-up"
          :data-aos-delay="100 + 100 * i"
          class="col-span-4 md:col-span-2 xl:col-span-1 flex flex-col space-y-6 text-center items-center"
        >
          <!-- Image -->
          <a
            href="#products"
            class="flex justify-center items-center h-96 bg-gray-100 rounded-2xl"
          >
            <img
              class="max-h-full"
              src="/images/recommended-product.png"
            />
          </a>

          <!-- Name -->
          <p class="font-medium">HUAWEI Produkt</p>

          <!-- Actions -->
          <div class="flex space-x-1">
            <Button white>entdecken</Button>
            <Button>Kaufen</Button>
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
        items: [{}, {}, {}, {}],
      };
    },
  };
</script>
