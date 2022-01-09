<template>
  <main>
    <Navigation />
    <Nuxt />
  </main>
</template>

<script>
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  export default {
    mounted() {
      AOS.init();
      document
        .querySelectorAll('img')
        .forEach((img) =>
          img.addEventListener('load', () => AOS.refresh())
        );
    },
  };
</script>
