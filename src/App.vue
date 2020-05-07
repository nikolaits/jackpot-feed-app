<template>
  <v-app>
    <v-content>
      <MainComponent/>
    </v-content>
  </v-app>
</template>

<script>
import MainComponent from './components/MainComponent';

export default {
  name: 'App',

  components: {
    MainComponent,
  },

  data: () => ({
    //
  }),
};
</script>
