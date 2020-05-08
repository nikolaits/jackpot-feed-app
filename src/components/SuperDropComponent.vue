<template>
  <div class="main_view">
    <div class="header" :style="{ backgroundImage: 'url(' + require('@/assets/1.png') + ')' }"></div>
    <div class="body">
      <p>
        {{item.currency}}
        <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
      </p>
    </div>
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
</style>