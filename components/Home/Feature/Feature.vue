<template>
  <div class="root">
    <div class="decoration-bg">
      <svg class="wave">
        <use xlink:href="/images/saas/deco-bg.svg#main" />
      </svg>
    </div>
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <v-row :class="[isMobile ? 'column-reverse' : 'row']">
          <v-col cols="12" md="6" class="px-8">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-offset="400"
              data-aos-duration="500"
            >
              <div class="illustration-left">
                <figure class="figure graphic">
                  <img
                    :src="imgAPI.saas[10]"
                    :data-2d="imgAPI.saas[9]"
                    :data-3d="imgAPI.saas[10]"
                    class="img-2d3d"
                    alt="illustration"
                  >
                </figure>
              </div>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div class="desc">
              <title-main :align="isMobile ? 'center' : 'left'">
                <span>
                  <strong>
                    Advanced Digital Solutions Optimizing Performance & Elevating User Satisfaction.
                  </strong>
                </span>
              </title-main>
              <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-start']">
                Our suite of services includes Custom Software Development, Web and Mobile Application Design, UI/UX Design, DevOps, Software Testing, Maintenance, and Continuous Support. We streamline operations, boost productivity, and elevate user experiences through bespoke software solutions
              </h6>
              <!-- <v-btn color="secondary" large class="btn">
                {{ $t('saas.see_detail') }}
              </v-btn> -->
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item">
        <v-row>
          <v-col md="6" cols="12">
            <div class="desc">
              <title-main :align="isMobile ? 'center' : 'right'">
                <span>
                  <strong>
                    Innovative and Future-Proof Solutions
                  </strong>
                </span>
              </title-main>
              <h6 class="use-text-subtitle2" :class="[isMobile ? 'text-center' : 'text-end']">
                Empowering businesses to excel and scale in the digital era.We revolutionize web solutions with state-of-the-art software products, enabling businesses to thrive in a rapidly evolving market.
              </h6>
              <!-- <div :class="[isMobile ? 'text-center' : 'text-end']">
                <v-btn color="secondary" large class="btn">
                  {{ $t('saas.see_detail') }}
                </v-btn>
              </div> -->
            </div>
          </v-col>
          <v-col md="6" cols="12" class="px-8">
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-offset="400"
              data-aos-duration="500"
            >
              <div class="illustration-right">
                <figure class="figure graphic">
                  <img
                    :src="imgAPI.saas[12]"
                    :data-2d="imgAPI.saas[11]"
                    :data-3d="imgAPI.saas[12]"
                    class="img-2d3d"
                    alt="illustration"
                  >
                </figure>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="item last">
        <title-main align="center">
          <span>
            <strong>
              Expertise in Advanced Technology Staying at the forefront of tech trends.
            </strong>
          </span>
        </title-main>
        <div class="tab">
          <v-row class="spacing6" justify="center">
            <v-col md="10" cols="12" class="pa-6">
              <h6 class="text-center use-text-subtitle2">
                We deliver innovative solutions that drive growth and operational efficiency. Our team is dedicated to adopting the latest technologies, ensuring you benefit from the most advanced software solutions available.
              </h6>
              <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="400"
                data-aos-duration="500"
              >
                <div class="illustration-center">
                  <figure class="graphic">
                    <img
                      :src="imgAPI.saas[14]"
                      :data-2d="imgAPI.saas[13]"
                      :data-3d="imgAPI.saas[14]"
                      class="img-2d3d"
                      alt="illustration"
                    >
                  </figure>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
