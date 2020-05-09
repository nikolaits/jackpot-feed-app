<template>
  <!-- <v-container class="fill-height ma-0 pa-0"> -->
    <!-- <v-row class="header" :style="{ 'background-image': 'url(' + require('@/assets/1.png') + ')' }">
    </v-row>-->
    <!-- <v-row class="header" style="height:60%">
      <v-img :contain="true" aspect-ratio="1.7" :src="require('@/assets/1.png')"></v-img>
    </v-row>
    <v-row class="body" >
      <v-img class="text-md-center" :src="require('@/assets/box.png')" contain>
        <p v-if="!isTimeoutEnded" >
        {{item.currency}}
        <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
        </p> -->
        <!-- <p v-if="isTimeoutEnded" class="text-md-center">
          {{item.currency}}
          {{endAmount}}
        </p> -->
      <!-- </v-img>
    </v-row>
  </v-container> -->
  <!-- <div class="header" ></div> -->
  <!-- <div class="body">-->

  <!-- </div>
    <div class="footer">
      <vue-countdown-timer
        v-if="showCountdown"
        @end_callback="endCallBack('event ended')"
        :start-time="'2020-5-8 00:00:00'"
        :end-time="endTime"
        :interval="1000"
        :start-label="''"
        :end-label="''"
        label-position="begin"
        :end-text="'00: 00: 00'"
        :day-txt="null"
        :hour-txt="':'"
        :minutes-txt="':'"
        :seconds-txt="''"
      >
        <template slot="countdown" slot-scope="scope">
          <span>{{scope.props.hours}}</span>
          {{scope.props.hourTxt}}
          <span>{{scope.props.minutes}}</span>
          {{scope.props.minutesTxt}}
          <span>{{scope.props.seconds}}</span>
          {{scope.props.secondsTxt}}
        </template>
      </vue-countdown-timer>
  </div>-->
  <v-container class="dailyView ma-0 pa-0">
      <v-row class="pa-0 ma-0">
      </v-row>
  </v-container>
</template>
<script>
// import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
import { getEndDate } from "../_helper";
export default {
  name: "DailyDropComponent",
  components: {
    // AnimatedNumber
  },
  props: {
    item: {}
  },
  data() {
    return {
      isTimeoutEnded: false,
      endAmount: "",
      endTime: "2020-5-8 19:35:00",
      showCountdown: false
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
    },
    endCallBack: function() {
      this.endAmount = this.formatToPrice(parseFloat(this.item.amount));
      this.isTimeoutEnded = true;
    }
  },
  beforeMount: function() {
    if (this.item.must_drop_in) {
      this.endTime = getEndDate(this.item.must_drop_in);
      this.showCountdown = true;
    }
  }
};
</script>
<style>
/* .row .header {
  position: relative;
  height: 50%;
  width: 100%;
  margin: 0;
  padding: 0;
}
.row .body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 100%;
  margin: 0;
  padding: 0;
  color: gold;
  font-size: 2em;
}

.row .body p{
  height: 100%;
} */
.row .header {
  background-color: yellow;
}
.row .body {
  background-color:   rebeccapurple;
}
</style>