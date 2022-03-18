<template>
  <div id="Product">
    <div class="contact" v-for="(listProduct, index) in product" :key="index">
<h1 class="text-blue-500" >{{ listProduct.name }}</h1>
<p class="text-purple-500">{{ listProduct.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListProduct",
  data() {
    return {
      product: [
        {
          name: 'Product 1',
          price: '$100'
        },
        {
          name: 'Product 2',
          price: '$200'
        },
        {
          name: 'Product 3',
          price: '$300'
        },
        {
          name: 'Product 4',
          price: '$400'
        },
        {
          name: 'Product 5',
          price: '$500'
        }
      ]
    }
  }

}
</script>

<style>
</style>