<template>
  <div class="banner-wrap">
    <div v-if="loaded" class="carousel">
      <splide
        ref="sliderBanner"
        class="slider"
        :options="slickOptions"
        @splide:active="handleAfterChange"
      >
        <splide-slide>
          <div id="slide1" class="slide">
            <div class="inner">
              <div class="img background-banner">
                <img
                  class="img-2d3d"
                  :src="imgAPI.saas[5]"
                  :data-2d="imgAPI.saas[4]"
                  :data-3d="imgAPI.saas[5]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row>
                  <v-col md="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2">
                        Delivering Excellence in Every Project.
                      </h4>
                      <h5 class="use-text-subtitle2">
                        We specialize in crafting intuitive and engaging digital products.
                      </h5>
                      <!-- <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="secondary"
                          :href="link.saas.contact"
                          class="button"
                        >
                          {{ $t('saas.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div> -->
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <div class="oval-floor slide1" />
                      <img
                        class="img-2d3d img-slide1"
                        :src="imgAPI.saas[1]"
                        :data-2d="imgAPI.saas[0]"
                        :data-3d="imgAPI.saas[1]"
                        alt="banner 1 3D"
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div id="slide2" class="slide">
            <div class="inner">
              <div class="img background-banner mobile">
                <img
                  class="img-2d3d"
                  :src="imgAPI.saas[5]"
                  :data-2d="imgAPI.saas[4]"
                  :data-3d="imgAPI.saas[5]"
                  alt="background"
                >
              </div>
              <v-container>
                <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                  <v-col md="6" cols="12" class="px-6">
                    <div class="img">
                      <div class="oval-floor slide2" />
                      <img
                        class="img-2d3d img-slide2"
                        :src="imgAPI.saas[3]"
                        :data-2d="imgAPI.saas[2]"
                        :data-3d="imgAPI.saas[3]"
                        alt="banner 2 3D"
                      >
                    </div>
                  </v-col>
                  <v-col md="6" cols="12" class="px-6 d-flex align-center">
                    <div class="text">
                      <h4 class="use-text-title2">
                        Web & Mobile Solutions.
                      </h4>
                      <h5 class="use-text-subtitle2">
                        We offer comprehensive services in web and mobile app development, software engineering, and quality assurance.
                      </h5>
                      <!-- <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="secondary"
                          :href="link.saas.contact"
                          class="button"
                        >
                          {{ $t('saas.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div> -->
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
        <splide-slide>
          <div id="slide3" class="slide center-content">
            <div class="inner">
              <v-container>
                <v-row justify="end">
                  <v-col cols="12" class="px-sm-12 px-6">
                    <div class="text text-center">
                      <h4 class="use-text-title2">
                        Seamless Integration and Customized Solutions
                      </h4>
                      <h5 class="use-text-subtitle2">
                        Experience the power of technology with our bespoke services.
                      </h5>
                      <!-- <div class="btn-area">
                        <v-btn
                          variant="text"
                          size="large"
                          color="primary"
                          href="#"
                          class="button"
                        >
                          {{ $t('common.btn_detail') }}
                        </v-btn>
                        <v-btn
                          size="large"
                          color="secondary"
                          :href="link.saas.contact"
                          class="button"
                        >
                          {{ $t('saas.getstarted') }}
                          &nbsp;
                        </v-btn>
                      </div> -->
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <div class="img h-banner">
                      <div class="oval-floor slide3" />
                      <img
                        class="img-2d3d"
                        src="/images/saas/banner3_3D.png"
                        :data-2d="imgAPI.saas[6]"
                        :data-3d="imgAPI.saas[7]"
                        alt="banner 3 3D"
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="slide-nav-group">
      <div class="deco-wrap">
        <div class="deco bottom">
          <svg class="wave">
            <use xlink:href="/images/saas/deco-wave.svg#main" />
          </svg>
        </div>
        <div class="deco top">
          <svg class="wave">
            <use xlink:href="/images/saas/deco-wave.svg#main" />
          </svg>
        </div>
      </div>
      <div class="wave wave-cover" />
      <hidden point="smDown">
        <v-container>
          <nav class="slide-nav">
            <v-btn
              :class="{ active: currentSlide === 0 }"
              variant="text"
              @click="gotoSlide(0)"
            >
              <strong class="p-2">Delivering Excellence</strong>
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 1 }"
              variant="text"
              @click="gotoSlide(1)"
            >
              <strong class="p-2">Web and Mobile</strong>
            </v-btn>
            <v-divider class="divider" vertical inset />
            <v-btn
              :class="{ active: currentSlide === 2 }"
              variant="text"
              @click="gotoSlide(2)"
            >
              <strong class="p-2">Customize Solution</strong>
            </v-btn>
          </nav>
        </v-container>
      </hidden>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../../Hidden';
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link,
      imgAPI,
      slickOptions: {
        pagination: false,
        arrows: false,
        perPage: 1,
        type: 'loop',
        speed: 1000,
        easing: 'ease',
        direction: 'ltr',
        reducedMotion: {
          speed: 1000,
          rewindSpeed: 1000,
        },
        breakpoints: {
          800: {
            pagination: true,
          },
        },
      },
    };
  },
  computed: {
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    this.loaded = true;
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }
    }, 100);
  },
  methods: {
    handleAfterChange(slide) {
      this.currentSlide = slide.index;
    },
    gotoSlide(index) {
      this.$refs.sliderBanner.go(index);
    },
  },
};
</script>
