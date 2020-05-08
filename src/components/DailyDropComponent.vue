<template>
  <div class="main_view" >
    <div class="header" :style="{ backgroundImage: 'url(' + require('@/assets/1.png') + ')' }">
    </div>
    <div class="body" :style="{ backgroundImage: 'url(' + require('@/assets/box.png') + ')' }">
        <p>
        {{item.currency}}
        <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
        </p>
    </div>
    <div class="footer">
    </div>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
export default {
  name: "DailyDropComponent",
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
.header{
    height: 60%;
    width: 100%;
    background-repeat: no-repeat;
    background-position:  center center;
      background-attachment: fixed;
     -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.body{
    height: 20%;
    width: 100%;
    object-fit: cover;
}
</style>