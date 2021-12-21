<template>
  <section id="start" class="bg-black text-white">
    <div class="container max-w-5xl py-12 lg:py-24">
      <!-- Title -->
      <h2 data-aos="fade-up" class="text-center">
        Die intelligente Kamera. <br />
        Einfach überall platzieren.
      </h2>

      <!-- Image -->
      <img
        data-aos="fade-up"
        class="my-10 rounded-2xl"
        :src="images[activeIndex]"
        alt=""
      />

      <!-- Content Grid -->
      <div class="flex flex-col-reverse lg:flex-row">
        <!-- Text -->
        <p data-aos="fade-up" class="mt-4 lg:mt-0 lg:mr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dicta sunt deserunt esse! Illum temporibus
          unde dolores, nisi illo veritatis eum quae
          doloribus ab, commodi laudantium amet
          voluptatibus? Illum possimus totam eveniet quam.
        </p>

        <!-- Image Switch -->
        <div
          data-aos="fade-up"
          class="self-end lg:self-start flex items-center space-x-3"
        >
          <div
            class="p-4 bg-indigo-300 hover:ring-2 ring-offset-4 ring-indigo-300 ring-offset-black rounded-full transition duration-100 cursor-pointer"
            :class="{ 'ring-2': activeIndex === 0 }"
            @click="activeIndex = 0"
          />
          <div
            class="p-4 bg-rose-300 hover:ring-2 ring-offset-4 ring-rose-300 ring-offset-black rounded-full transition duration-100 cursor-pointer"
            :class="{ 'ring-2': activeIndex === 1 }"
            @click="activeIndex = 1"
          />
          <div
            class="p-4 bg-white hover:ring-2 ring-offset-4 ring-white ring-offset-black rounded-full transition duration-100 cursor-pointer"
            :class="{ 'ring-2': activeIndex === 2 }"
            @click="activeIndex = 2"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        images: [
          '/images/camera-1.jpg',
          '/images/camera-1.jpg',
          '/images/camera-1.jpg',
        ],
        activeIndex: 0,
      };
    },
  };
</script>
