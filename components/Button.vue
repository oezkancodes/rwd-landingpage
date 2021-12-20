<template>
  <button
    class="rounded-l-full rounded-r-full py-2 lg:py-3 px-6 lg:px-8 uppercase"
    :class="
      white
        ? 'text-black bg-white'
        : 'text-white bg-red-600'
    "
  >
    <slot name="default" />
  </button>
</template>

<script>
  export default {
    props: {
      white: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
