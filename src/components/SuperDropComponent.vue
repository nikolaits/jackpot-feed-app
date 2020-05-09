<template>
  <v-img class="superViewImage pa-2 ma-0" position="center top" :contain="contain" :src="require('@/assets/stars.png')">
    <v-container class="superView ma-0 pt-0 pb-0 pl-1 pr-1">
      <v-row class="pa-0 ma-0">
        <v-col class="ma-0 ps-0 pe-0" cols="5">
          <v-img
            class
            height="100%"
            width="100%"
            :contain="contain"
            aspect-ratio="1.7"
            position="center center"
            :src="require('@/assets/2.png')"
          ></v-img>
        </v-col>
        <v-col cols="7" class="d-flex justify-center align-center">
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
  data() {
    return {
      
      contain:true
    };
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
.superView .row {
  height: 100%;
}
.superView .amount {
  font-size: 1.5vw;
}
</style>