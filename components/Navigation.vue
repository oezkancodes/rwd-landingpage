<template>
  <nav class="bg-black absolute top-0 left-0 right-0 z-50">
    <div
      class="py-4 container flex items-center justify-between"
    >
      <Logo class="h-8" />
      <Button>Kaufen</Button>
    </div>
  </nav>
</template>

<script>
  import Logo from '~/assets/svg/logo-white.svg';

  export default {
    components: {
      Logo,
    },
  };
</script>
