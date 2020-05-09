<template>
  <v-container
    id="main_container"
    :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }"
  >
    <v-row v-for="(item,index) in $store.getters.getPots" :key="index" class="ma-0 pa-0">
      <DailyDropComponent v-if="item.imageType == 'daily_drop'" :item="item" />
      <SuperDropComponent v-if="item.imageType == 'super_drop'" :item="item" />
      <HourlyDropComponent v-if="item.imageType == 'hourly_drop'" :item="item" />
    </v-row>
  </v-container>
</template>
<script>
import DailyDropComponent from "./DailyDropComponent";
import SuperDropComponent from "./SuperDropComponent";
import HourlyDropComponent from "./HourlyDropComponent";
export default {
  name: "MainComponent",
  components: {
    DailyDropComponent,
    SuperDropComponent,
    HourlyDropComponent
  },
  mounted() {
    this.$store
      .dispatch("getData")
      .then(() => {
        setInterval(() => {
          this.$store.dispatch("getNewData");
        }, 30000);
      })
      .catch(err => {
        console.log("Request error", err);
      });
  }
};
</script>
<style>
div#main_container {
  position: relative;
  background-color: green;
  min-height: 320px;
  height: 100%;
  min-width: 150px;
  max-width: 300px;
  padding: 0;
}
#main_container .amount{
  background-color: rgb(167, 127, 26);
  background-image: linear-gradient(#F1F699, #CCAF3B);
  background-size: 100%;
  background-repeat: repeat;
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;

  font-family: 'Lato', sans-serif;
  font-weight: 900;
}
.countdown div{
  color:rgb(246, 249, 205);
}
#main_container > .row:nth-child(1) {
  position: relative;
  height: 60%;
}
#main_container > .row:nth-child(2) {
  height: 20%;
}
#main_container > .row:nth-child(3) {
  height: 20%;
}
#main_container .countdown div {
  display: inline-block !important;
}
#main_container .countdown span {
  background-color: black;
  border-radius: 30px;
  padding: 1% 5%;
}
#main_container .countdown,
#main_container .countdown i {
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
  color: white;
}
.dailyView, .hourlyView,.superView{
  position: relative;
  height: 100%;
  width: 100%;
  background: radial-gradient(
    ellipse at center,
    rgba(42, 51, 100, 0.1) 0%,
    rgba(42, 51, 100, 0.30) 70%,
    rgba(42, 51, 100, 0.45) 80%,
    rgba(42, 51, 100, 0.85) 90%,
    rgba(42, 51, 100, 1.0) 100%
  );
}
@media (max-width: 960px) {
  #main_container .amount {
    font-size: 4.6vw;
  }
  #main_container .countdown {
    font-size: 2.5vw;
  }
  #main_container .countdown i {
    font-size: 2.8vw;
  }
}
</style>
