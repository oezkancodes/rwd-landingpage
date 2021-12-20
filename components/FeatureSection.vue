<template>
  <section class="py-12 lg:py-24 container text-center">
    <!-- Title -->
    <h2 data-aos="fade-up" class="mb-8">
      Professionelle Überwachung
    </h2>

    <!-- Text -->
    <p data-aos="fade-up" class="font-bold">
      Unsere Überwachungskameras ermöglichen Ihnen noch
      bisher unbekannte Einblicke und Erlebnisse.
    </p>

    <!-- Image -->
    <img
      data-aos="fade-up"
      class="my-6 w-full max-w-2xl mx-auto"
      src="/images/nest-doorbell.png"
    />

    <!-- Features -->
    <div
      class="grid grid-cols-3 gap-y-12 lg:gap-x-6 max-w-5xl mx-auto"
    >
      <div
        v-for="(item, i) in items"
        :key="item.label"
        data-aos="fade-up"
        :data-aos-delay="100 * i"
        class="col-span-3 lg:col-span-1 flex flex-col items-center space-y-4"
      >
        <img class="w-16 h-16" :src="item.src" />
        <p
          class="font-black text-center"
          v-text="item.label"
        />
      </div>
    </div>

    <Button data-aos="fade-up" class="mt-12">Kaufen</Button>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            src: '/images/feature-sensor.png',
            label: 'Hochauflösende Aufnahmen',
          },
          {
            src: '/images/feature-color.png',
            label: 'Auch im dunkeln sehen',
          },
          {
            src: '/images/feature-zoom.png',
            label: '100x Zoom zeigt neue Details',
          },
        ],
      };
    },
  };
</script>
