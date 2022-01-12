<template>
  <button
    class="rounded-l-full rounded-r-full py-2 lg:py-3 px-6 lg:px-8 uppercase transition duration-200"
    :class="[
      {
        'text-white bg-red-600 hover:bg-red-700 active:bg-red-800':
          !white && !gray,
      },
      {
        'text-black bg-white border-2 border-gray-300 hover:bg-gray-100 active:bg-gray-200':
          white && !gray,
      },
      {
        'text-white bg-gray-500 hover:bg-gray-600 active:bg-gray-700':
          gray && !white,
      },
    ]"
    @click="$emit('click')"
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
      gray: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
