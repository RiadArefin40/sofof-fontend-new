<template>
  <div
    ref="wrapper"
    v-scroll="runCounter"
    :class="{ dark: dark }"
    class="counter-wrap"
  >
    <v-container class="max-md">
      <v-row
        align="center"
        justify="center"
        class="root"
      >
        <v-col sm="4">
          <div class="counter-item">
            <span class="icon ion-ios-flag primary--text" />
            <div class="text">
              <h4 class="text-h3">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="123"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                Lorem Ipsum
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="4">
          <div class="counter-item">
            <span class="icon ion-md-people primary--text" />
            <div class="text">
              <h4 class="text-h3">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="456"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                Ac bibendum
              </h6>
            </div>
          </div>
        </v-col>
        <v-col sm="4">
          <div class="counter-item">
            <span class="icon ion-md-globe primary--text" />
            <div class="text">
              <h4 class="text-h3">
                {{ !visible ? 0 : '' }}
                <count-up
                  v-if="visible"
                  :start-val="0"
                  :end-val="456"
                  :options="{ prefix: '+' }"
                />
              </h4>
              <h6 class="use-text-subtitle2">
                Adipiscing
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './counter-style';
</style>

<script>
import CountUp from 'vue-countup-v3';
import { ref } from 'vue';

export default {
  components: {
    CountUp,
  },
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const visible = ref(false);
    const wrapper = ref(null);
    const offset = 500;
    function runCounter() {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const topPosition = scrollPosition + offset;

      if (topPosition > wrapper.value.offsetTop) {
        visible.value = true;
      }
    }

    return {
      visible,
      runCounter,
      wrapper,
    };
  },
  data() {
    return {
      loaded: false,
    };
  },
};
</script>
