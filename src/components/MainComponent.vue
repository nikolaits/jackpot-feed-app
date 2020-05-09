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
  width: 20%;
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
/* .main_view {
  position: relative;
  display: block;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.main_view p {
  background-color: transparent;
} */
</style>
