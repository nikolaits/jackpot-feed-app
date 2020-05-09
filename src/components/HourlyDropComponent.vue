<template>
  <v-img class="hourlyViewImage pa-2 ma-0" position="center top" contain="true" :src="require('@/assets/stars.png')">
    <v-container class="hourlyView ma-0 pt-0 pb-0 pl-1 pr-1">
      <v-row class="pa-0 ma-0">
        <v-col class="ma-0 ps-0 pe-0" cols="5">
          <v-img
            class
            height="100%"
            width="100%"
            :contain="true"
            aspect-ratio="1.7"
            position="center center"
            :src="require('@/assets/3.png')"
          ></v-img>
        </v-col>
        <v-col cols="7" class="d-flex flex-column justify-md-center">
          <p v-if="!isTimeoutEnded" class="amount pa-0 ma-0">
            {{item.currency}}
            <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
          </p>
          <p v-if="isTimeoutEnded" class="amount pa-0 ma-0">
            {{item.currency}}
            {{endAmount}}
          </p>
          <p class="countdown">
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
  </v-img>
</template>
<script>
import AnimatedNumber from "animated-number-vue";
import accountingjs from "accounting-js";
import { getEndDate } from "../_helper";
export default {
  name: "HourlyDropComponent",
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
.hourlyViewImage {
  position: relative;
  height: 100%;
}
.hourlyView .row {
  height: 100%;
}
.hourlyView .amount {
  font-size: 1.6vw;
}
.hourlyView .countdown {
  display: inline-block;
}
.hourlyView .countdown {
  font-size: 0.7vw;
}
.hourlyView .countdown i {
  font-size: 0.9vw;
}

</style>