<template>
  <div id="Product" class="container">
    <div class="grid grid-cols-3 gap-6">
      <div v-for="(listProduct, index) in product" :key="index">
        <div
          class="card border border-gray-600 p-4 rounded-3xl overflow-hidden"
          v-if="listProduct.price <= Number(maksimal)"
        >
          <img
            class="mx-auto rounded-2xl"
            :src="listProduct.images"
            :alt="listProduct.name"
          />
          <div class="content py-4">
            <h1 class="text-2xl font-semibold">{{ listProduct.name }}</h1>
            <p class="text-xl font-semibold">
              {{ listProduct.price }}
            </p>
            <div class="h3">Rp {{ listProduct.price }}</div>
          </div>
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
      maksimal: "200",
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