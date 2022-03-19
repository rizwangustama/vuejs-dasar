<template>
  <div class="header sticky top-0 bg-white shadow-2xl mb-10">
    <div class="container py-5">
      <div class="flex justify-end items-center gap-5">
        <p class="font-bold text-gray-700">Jumlah</p>
        <p
          class="
            bg-violet-500
            rounded-full
            text-white
            py-3
            px-5
            text-center
            align-middle
          "
        >
          1
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    jumlah: String,
  },
};
</script>

<style>
</style>