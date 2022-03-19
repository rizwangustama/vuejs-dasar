<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderComponent />
    <ListProduct />
  </div>
</template>

<script>
import ListProduct from "./components/ListProduct.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  name: "App",
  components: {
    ListProduct,
    HeaderComponent,
  },
};
</script>