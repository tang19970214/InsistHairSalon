<script lang="ts" setup>
useSeoMeta({
  title: "頂級頭皮養護工程",
  description: "頂級頭皮養護工程",
  ogTitle: "頂級頭皮養護工程",
  ogDescription: "頂級頭皮養護工程",
});
</script>

<template>
  <section class="w-full min-h-screen">
    <!-- header -->
    <div class="w-full p-5 bg-#E8A29E/60">
      <div class="w-full flex flex-col items-center justify-center gap-1 md:gap-3 bg-white p-5 rounded-lg">
        <div class="w-full md:w-auto px-10 py-2 bg-#E8A29E text-center">
          <strong class="md:text-xl lg:text-3xl text-white">對妳頭皮健康的挑惕追求，我們不會停止</strong>
        </div>

        <div class="w-full md:w-auto px-10 py-2 bg-#E8A29E text-center">
          <strong class="text-xl md:text-3xl lg:text-6xl tracking-widest text-white">頂級頭皮養護工程</strong>
        </div>

        <div class="w-full relative flex justify-center">
          <div class="relative z-10 inline-block px-2 bg-white">
            <p class="text-gray-500 md:text-lg lg:text-xl">往下看詳細介紹</p>
          </div>
          <div class="absolute left-0 top-1/2 w-full h-px border-px border-solid"></div>
        </div>
      </div>
    </div>

    <!-- introduce -->
    <div class="w-4/5 lg:w-3/5 mx-auto mb-3">
      <img class="w-full" src="/images/scalpcare/youKnow.png" alt="" />
      <img class="w-full" src="/images/scalpcare/hairFollicle.png" alt="" data-aos="fade-up" data-aos-duration="600" />
    </div>

    <!-- story -->
    <div class="w-4/5 lg:w-3/5 mx-auto text-black text-opacity-70 mt-2 mb-5">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="relative w-full h-full" v-for="i in 12" :key="i" data-aos="fade-up" data-aos-duration="600">
          <img class="border-px border-solid p-1" :src="`/images/scalpcare/${i}.png`" width="100%" alt="頂級頭皮養護工程" />

          <div
            class="absolute top-2 left-2 w-6 h-6 flex items-center justify-center rounded-full bg-gray-400 text-white text-lg">
            {{ i }}</div>
        </div>
      </div>
    </div>
  </section>
</template>