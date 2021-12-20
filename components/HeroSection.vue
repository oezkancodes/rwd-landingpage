<template>
  <section
    class="flex items-center justify-center h-screen relative overflow-hidden"
  >
    <video
      id="myVideo"
      class="absolute top-0 bottom-0 opacity-[15%] h-full w-full object-cover"
      autoplay
      muted
    >
      <source
        src="/videos/background-video.mp4"
        type="video/mp4"
      />
    </video>
    <div class="container text-center relative">
      <h1 class="text-7xl mb-6">
        <span class="font-black">WatchCam</span> Mate X2
      </h1>
      <p class="text-3xl">Überwachen wie ein Profi</p>
      <img class="my-6" src="" alt="" />
      <Button>Entdecken</Button>
    </div>
  </section>
</template>

<script>
  export default {};
</script>
