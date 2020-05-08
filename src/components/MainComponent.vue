<template>
  <v-container class="main_container" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }">
    <v-row v-for="(item,index) in $store.getters.getPots" :key="index">
        <DailyDropComponent v-if="item.imageType == 'daily_drop'" :item ="item"/>
        <SuperDropComponent v-if="item.imageType == 'super_drop'" :item ="item"/>
        <HourlyDropComponent v-if="item.imageType == 'hourly_drop'" :item ="item"/>
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
.main_container .row:nth-child(1){
  position: relative;
  height: 60%;
  margin: 0;
  background-color: red;
}
.main_container .row:nth-child(2){
  height: 20%;
  margin: 0;
  background-color: green;
}
.main_container .row:nth-child(3){
  height: 20%;
  margin: 0;
  background-color: yellow;
}
.main_view{
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background-color: transparent;
    word-wrap: break-word;
}
.main_view p{
  background-color: transparent;
}
</style>
