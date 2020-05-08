<template>
  <div class="main_view">
    <!-- <h1>SuperDropComponent</h1> -->
    <p>
      {{item.currency}}
      <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
    </p>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
export default {
  name: "SuperDropComponent",
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