<template>
<!-- <v-container> -->
  <div class="main_view">
    <!-- <h1>HourlyDropComponent</h1> -->
    <p>
      {{item.currency}}
      <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
    </p>
  </div>
  <!-- </v-container> -->
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
export default {
  name: "HourlyDropComponent",
  components: {
    AnimatedNumber
  },
  props: {
    item: {}
  },
  methods: {
    formatToPrice(value) {
      return accountingjs.formatMoney(value, {
        symbol: "",
        precision: 2,
        thousand: ",",
        decimal: "."
      });
    }
  }
};
</script>
<style>
/* .main_view{
    width: 100%;
    background-color: none;
    word-wrap: break-word;
} */
</style>