<template>
  <v-container class="main_container" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
    <!-- <v-row class="text-center" >
      <div class="main_">
      </div> -->
     
    <!-- </v-row> -->
    <!-- <v-layout row wrap>
        <v-flex d-flex xs6 style="background:red;">
        </v-flex>
        <v-flex d-flex xs6>
        </v-flex>
    </v-layout> -->

    <v-row class="first_row" >
      <li v-for="(item,index) in $store.getters.getPots" :key="index">
        <!-- <animated-number
          :value="$store.getters.getPots[index]?$store.getters.getPots[index].amount:0"
          :formatValue="formatToPrice"
          :duration="2000"
        /> -->
        <animated-number
          :value="item.amount"
          :formatValue="formatToPrice"
          :duration="2000"
        />
      </li>
    </v-row>
    <v-row class="second_row" >
    </v-row>
    <v-row class="third_row" >
    </v-row>
  </v-container>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js"
export default {
  name: "MainComponent",
  components: {
    AnimatedNumber
  },
  data: () => ({}),
  methods: {
    formatToPrice(value) {
      return accountingjs.formatMoney(value, { symbol: "$", precision: 2, thousand: ",", decimal: "." });
    }
  },
  mounted() {
    this.$store.dispatch('getData')
    .then(()=>{
      setInterval(() => {
        this.$store.dispatch('getNewData');
      }, 5000);
    })
    .catch( err=>{
      console.log("Request error", err)
    });
  }
};
</script>
<style>
div.container{
  position: relative;
  background-color: green;
  min-height: 320px;
  height: 100%;
  min-width: 150px;
  max-width: 300px;
  width:20%;
  padding:0;
}
.main_container div:nth-child(1){
  height: 60%;
  margin: 0;
  background-color: red;
}
.main_container div:nth-child(2){
  height: 20%;
  margin: 0;
  background-color: green;
}
.main_container div:nth-child(3){
  height: 20%;
  margin: 0;
  background-color: yellow;
}
</style>
