<template>
  <div id="Product" class="container">
    <header class="sticky top-0 py-5 lg:w-2/4">
      <div class="form flex gap-10 items-center">
        <label class="w-1/4" for="">Maxsimal Price</label>
        <input
          class="
            w-3/4
            border border-gray-600
            p-2
            px-3
            rounded-full
            background-transparent
          "
          type="number"
          v-model="maksimal"
        />
      </div>
      <input
        class="w-full py-10"
        type="range"
        min="0"
        v-model="maksimal"
        max="1000"
      />
    </header>
    <div class="grid lg:grid-cols-3 gap-6">
      <div v-for="(listProduct, index) in product" :key="index">
        <div
          class="card p-5 rounded-3xl overflow-hidden shadow-xl"
          v-if="listProduct.price <= Number(maksimal)"
        >
          <img
            class="mx-auto rounded-2xl w-full"
            :src="listProduct.images"
            :alt="listProduct.name"
          />
          <div class="content py-4">
            <h1 class="text-2xl font-semibold">{{ listProduct.name }}</h1>
            <p class="text-xl font-semibold">
              {{ listProduct.price }}
            </p>
            <div class="h3">Rp {{ listProduct.price }}</div>
            <p>No.{{ index + 1 }}</p>
          </div>
          <button
            class="py-2 px-5 bg-black rounded-full text-white w-full"
            v-on:click="count.push(listProduct.price)"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProduct",
  data() {
    return {
      maksimal: 1000,
      tambah: null,
      product: [
        {
          name: "Product 1",
          price: "100",
          images: "https://unsplash.it/400/300",
        },
        {
          name: "Product 2",
          price: "200",
          images: "https://unsplash.it/400/300",
        },
        {
          name: "Product 3",
          price: "300",
          images: "https://unsplash.it/400/300",
        },
        {
          name: "Product 4",
          price: "400",
          images: "https://unsplash.it/400/300",
        },
        {
          name: "Product 5",
          price: "500",
          images: "https://unsplash.it/400/300",
        },
      ],
    };
  },
};
</script>

<style>
</style>