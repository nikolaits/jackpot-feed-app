<template>
  <div class="main_view">
    <div class="header" :style="{ backgroundImage: 'url(' + require('@/assets/1.png') + ')' }"></div>
    <div class="body">
      <p v-if="!isTimeoutEnded">
        {{item.currency}}
        <animated-number :value="item.amount" :formatValue="formatToPrice" :duration="2000" />
      </p>
      <p v-if="isTimeoutEnded">
        {{item.currency}}
        {{endAmount}}
      </p>
    </div>
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
    </div>
  </div>
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
/* .header{
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
} */
</style>