<template>
  <div class="home">
    <Parent></Parent>
    <Price></Price>
    <Reviews></Reviews>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Parent from "../components/Parent.vue";
import Price from "../components/Price.vue";
import Reviews from "../components/Reviews.vue";


export default {
  name: "Home",
  components: {
    Parent,
    Price,
    Reviews,
  },
};
</script>

