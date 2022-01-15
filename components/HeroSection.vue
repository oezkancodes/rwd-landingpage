<template>
  <kinesis-container>
    <section
      id="hero"
      class="container text-center pt-28 pb-12 lg:pt-36 lg:pb-24"
    >
      <!-- Title -->
      <h1
        data-aos="fade-up"
        class="text-4xl lg:text-7xl mb-4 lg:mb-6"
      >
        <span class="font-black">WatchCam</span> Mate X2
      </h1>

      <!-- Description -->
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        class="text-xl lg:text-3xl mb-6 lg:mb-8"
      >
        Intelligentes Überwachen - wie ein Profi
      </p>

      <!-- Desktop Product -->
      <div
        class="hidden lg:block mb-6 lg:mb-12"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <kinesis-element
          class="child relative z-50"
          type="depth"
          :strength="30"
        >
          <!-- Image -->
          <img
            class="my-12 w-full max-w-xs mx-auto drop-shadow-xl"
            src="/images/nest-head.png"
          />
        </kinesis-element>

        <img
          class="-mt-28 w-full max-w-xs mx-auto"
          src="/images/nest-body.png"
        />
      </div>

      <!-- Mobile Product -->
      <div
        data-aos="fade-up"
        data-aos-delay="400"
        class="my-8 lg:hidden"
      >
        <img
          class="relative my-6 w-full max-w-[12rem] mx-auto"
          src="/images/nest-head.png"
        />
        <img
          class="-mt-14 w-full max-w-[12rem] mx-auto"
          src="/images/nest-body.png"
        />
      </div>

      <!-- CTA -->
      <Button
        v-scroll-to="{ el: '#start', offset: 1 }"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Entdecken
      </Button>
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

    mounted() {
      const audio = new Audio('/sounds/robot.mp3');
      window.document
        .getElementById('hero')
        .addEventListener('mousemove', () => {
          if (window.innerWidth >= 1024) {
            audio.play();
          }
        });
    },
  };
</script>
