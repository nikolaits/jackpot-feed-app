<template>
  <v-container class="ma-0 pa-2">
      <v-container class="dailyView ma-0 pa-0">
        <v-row class="pa-0 ma-0">
          <v-img class="dailyViewImage pa-0 ma-0" :contain="contain" :src="require('@/assets/1.png')">
          </v-img>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-img class="dailyViewImage pa-0 ma-0" :contain="contain" :src="require('@/assets/box.png')">
          <v-col cols="12" class="d-flex justify-center align-center ma-0 pa-0">
             <p v-if="!isTimeoutEnded" class="amount pa-0 ma-0">
              {{item.currency}}
              <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
            </p>
            <p v-if="isTimeoutEnded" class="amount pa-0 ma-0">
              {{item.currency}}
              {{endAmount}}
            </p>
          </v-col>
          </v-img>
        </v-row>
        <v-row class="pa-0 ma-0">
          <v-col cols="12" class="d-flex justify-center align-center mt-7 mb-7 pa-0" >
          <p class="countdown text-center ma-0">
            <span>
              Must Drop In
              <v-icon class="ml-1 mr-1" dark>mdi-clock</v-icon>
              <vue-countdown-timer
                v-if="showCountdown"
                @end_callback="endCallBack('event ended')"
                :start-time="'2020-5-8 00:00:00'"
                :end-time="endTime"
                :interval="1000"
                :start-label="''"
                :end-label="''"
                label-position="begin"
                :end-text="'00:00:00'"
                :day-txt="null"
                :hour-txt="':'"
                :minutes-txt="':'"
                :seconds-txt="''"
              >
                <template
                  slot="countdown"
                  slot-scope="scope"
                >{{scope.props.hours}}{{scope.props.hourTxt}}{{scope.props.minutes}}{{scope.props.minutesTxt}}{{scope.props.seconds}}{{scope.props.secondsTxt}}</template>
              </vue-countdown-timer>
            </span>
          </p>
          </v-col>
        </v-row>
    </v-container>
  </v-container>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
import { getEndDate } from "../_helper";
export default {
  name: "DailyDropComponent",
  components: {
    AnimatedNumber
  },
  props: {
    item: {}
  },
  data() {
    return {
      isTimeoutEnded: false,
      endAmount: "",
      endTime: "2020-5-8 19:35:00",
      showCountdown: false,
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
.dailyViewImage{
  position: relative;
  height: 100%;
}
.dailyView .col-12{
  height: 100%;
}
.dailyView .amount {
  font-size: 2.6vw;
}
.dailyView .countdown {
  display: inline-block;
  width: 100%;
}
.dailyView .countdown {
  font-size: 0.9vw;
}
.dailyView .countdown i {
  font-size: 1vw;
}
</style>