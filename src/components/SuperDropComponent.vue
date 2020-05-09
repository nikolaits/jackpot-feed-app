<template>
  <v-img class="superViewImage pa-2 ma-0" contain :src="require('@/assets/stars.png')">
    <v-container class="superView ma-0 pa-0">
      <v-row class="pa-0 ma-0">
        <v-col class="ma-0 ps-0 pe-0" cols="5">
          <v-img
            class
            height="100%"
            width="100%"
            :contain="true"
            aspect-ratio="1.7"
            position="center center"
            :src="require('@/assets/2.png')"
          ></v-img>
        </v-col>
        <v-col cols="7" class="d-flex justify-md-center align-md-center">
          <p class="amount pa-0 ma-0">
            {{item.currency}}
            <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-img>
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
.superViewImage {
  position: relative;
  height: 100%;
}
.superView {
  position: relative;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(42, 51, 100, 0) 0%,
    rgba(42, 51, 100, 0.25) 80%,
    rgba(42, 51, 100, 0.55) 100%
  );
}
.superView .row {
  height: 100%;
}
.superView .amount {
  font-size: 1.4em;
}
</style>