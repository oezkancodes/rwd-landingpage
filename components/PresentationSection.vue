<template>
  <section id="start" class="bg-black text-white">
    <div
      class="container max-w-5xl py-12 lg:py-24"
      data-aos="fade-up"
    >
      <!-- Title -->
      <h2 class="text-center">
        Die intelligente Kamera. <br />
        Einfach überall platzieren.
      </h2>

      <!-- Image -->
      <img
        id="start-image"
        class="my-10 rounded-2xl"
        :src="items[activeIndex].image.url"
        alt=""
      />

      <div class="grid grid-cols-12 gap-6">
        <div
          v-for="(item, i) in items"
          :key="item.title"
          v-scroll-to="{ el: '#start-image', offset: -12 }"
          class="px-6 py-10 col-span-12 w-full max-w-sm mx-auto lg:col-span-4 lg:max-w-none flex flex-col items-center space-y-2 hover:ring-2 ring-red-600 rounded-xl transition duration-200 cursor-pointer"
          :class="[
            {
              'ring-2 bg-red-600/20': activeIndex === i,
            },
            { 'animate-pulse': activeIndex !== i },
          ]"
          @click="activeIndex = i"
        >
          <component :is="item.icon" class="text-red-600" />
          <p class="text-center" v-text="item.title" />
        </div>
      </div>

      <!-- Content Grid -->
      <!-- Text -->
      <p
        class="mt-8 text-center"
        v-text="items[activeIndex].text"
      />
    </div>
  </section>
</template>

<script>
  import CloudRainIcon from '~/static/images/cloud-rain.svg';
  import ZapIcon from '~/static/images/zap.svg';
  import HomeIcon from '~/static/images/home.svg';

  export default {
    components: {
      CloudRainIcon,
      ZapIcon,
      HomeIcon,
    },

    data() {
      return {
        activeIndex: 0,
        items: [
          {
            title: 'Einrasten – und es passt',
            icon: ZapIcon,
            image: { url: '/images/easy.webp' },
            text: 'Die akkubetriebene WatchCam Mate 2X lässt sich kinderleicht montieren. Du kannst sie so gut wie überall anbringen, drinnen oder draußen. Da die Kamera kein Kabel hat, brauchst du keine Steckdose in der Nähe.',
          },
          {
            title: 'Für Wind und Wetter',
            icon: CloudRainIcon,
            image: { url: '/images/rain.webp' },
            text: 'WatchCam Mate 2X ist akkubetrieben sowie witterungsbeständig und lässt sich jederzeit aufladen.',
          },
          {
            title: 'Fast überall zu Hause',
            icon: HomeIcon,
            image: { url: '/images/home.jpg' },
            text: 'WatchCam Mate 2X passt praktisch an jeden Platz. Damit du sie in Innenräumen ganz flexibel aufstellen kannst, gibt es als Zubehörteil einen Standfuß.',
          },
        ],
      };
    },
  };
</script>
