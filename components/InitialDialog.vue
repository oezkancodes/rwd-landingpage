<template>
  <div
    v-if="show"
    class="bg-black/20 fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
  >
    <div
      class="p-6 lg:p-8 bg-white rounded-xl max-w-lg mx-6"
    >
      <p class="mb-6">
        Hey 👋, wir würden dich gerne mit Cookies und
        Trackern überwachen. Wir nutzen deine Daten
        definitiv nur für gute Zwecke 🙏. Promise ✌️.
      </p>
      <Button @click="show = false">Einverstanden</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: true,
      };
    },
  };
</script>
