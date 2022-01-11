<template>
  <kinesis-container class="parent">
    <section class="my-12 lg:my-24 container text-center">
      <!-- Title -->
      <h2 data-aos="fade-up" class="mb-8">
        Professionelle Überwachung
      </h2>

      <!-- Text -->
      <p
        data-aos="fade-up"
        class="font-bold max-w-4xl mx-auto"
      >
        Lernen Sie von den Profis. Sogar in diesem Moment
        überwachen wir Sie mit Trackern, Cookies und
        vielleicht mit Ihrer Webcam.
      </p>

      <div data-aos="fade-up">
        <kinesis-element
          class="child relative z-50"
          type="depth"
          :strength="30"
        >
          <!-- Image -->
          <img
            class="my-16 lg:my-24 w-full max-w-sm mx-auto"
            src="/images/nest-head.png"
          />
        </kinesis-element>

        <img
          class="-mt-40 mb-16 lg:mb-24 w-full max-w-sm mx-auto"
          src="/images/nest-body.png"
        />
      </div>

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

      <Button data-aos="fade-up" class="mt-12"
        >Kaufen</Button
      >
    </section>
  </kinesis-container>
</template>

<script>
  import {
    KinesisContainer,
    KinesisElement,
  } from 'vue-kinesis';

  export default {
    components: {
      KinesisContainer,
      KinesisElement,
    },

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
