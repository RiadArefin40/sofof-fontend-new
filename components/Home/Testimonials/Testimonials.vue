<template>
  <div class="root">
    <v-container :class="{ fixed: isDesktop }">
      <v-row class="spacing6">
        <v-col md="7" cols="12" class="px-6">
          <div class="slider-wrap">
            <hidden point="smDown">
              <div class="decoration">
                <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                  <g stroke="none" stroke-width="0" fill-rule="evenodd">
                    <path id="Oval" d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" />
                  </g>
                </svg>
              </div>
            </hidden>
            <div class="carousel-wrap">
              <h3
                :class="[isMobile ? 'text-center' : 'text-left']"
                class="testi-title use-text-title2"
              >
                Project We Delivered
                <br>
                <strong>
                  <!-- {{ $t('saas.testi_titlestrong') }} -->
                </strong>
              </h3>
              <div v-if="loaded" class="carousel">
                <splide
                  ref="slider"
                  :options="slickOptions"
                  @splide:active="handleAfterChange"
                >
                  <splide-slide
                    v-for="(item, index) in testiContent"
                    :key="index"
                  >
                    <div class="item">
                      <div class="inner">
                        <div class="profile">
                          <div >
                            <img style="width: 120px;"  :src="item.avatar" :alt="item.name">
                          </div>
                          <h6 class="name">
                            {{ item.name }}
                            <span>
                          <a :href="item ? item.title : ''">View Details</a>
                        </span>
                          </h6>
                        </div>
                        <p class="use-text-paragraph">
                          {{ item.text }}
                        </p>
                      </div>
                    </div>
                  </splide-slide>
                </splide>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="5" cols="12" class="use-hidden-sm-down px-6">
          <hidden point="smDown">
            <div class="logo-wrap">
              <div
                v-for="(item, index) in testiContent"
                :key="index"
                class="figure-btn"
              >
                <v-btn
                  text
                  :class="{ active: currentSlide === index }"
                  @click="gotoSlide(index)"
                >
                  <img
                    :key="index"
                    :src="item.logo"
                    :alt="'logo' + index"
                  >
                </v-btn>
              </div>
            </div>
          </hidden>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Hidden from '../../Hidden';
import imgAPI from '@/assets/images/imgAPI';
import TestiCard from '../../Cards/TestiStackCard';

const testiData = [
  {
    text:
      'Own a professional WhatsApp Business account on the ProWhatss platform that can be used by all work teams, including marketing, customer service, sales, and technical support, ensuring that you continue effective communication with all customers without losing any of them!',
    avatar: "https://prowhats.com/wp-content/uploads/2024/09/cropped-apple-touch-icon-65x58.png",
    name: 'Prowhats',
    title: 'https://prowhats.com/',
    logo: "https://prowhats.com/wp-content/uploads/2024/09/cropped-apple-touch-icon-65x58.png",
  },
  {
    text:
      'An electronic platform specialized in delivering water to the mosques of Makkah Al-Mukarramah in an easy and convenient way',
    avatar: "https://i.ibb.co.com/4JR4tQL/svgviewer-png-output.png",
    name: 'Qatarat',
    title: 'https://qataratapp.com/',
    logo: 'https://i.ibb.co.com/4JR4tQL/svgviewer-png-output.png',
  },
  {
    text:
      'With the passion of excellence, we began our journey at a dominant institution of information technology and business solutions in 2019.To provide all technical and modern programming work and services, we started with the establishment of accounting technical programmes and site design.Electronic applications through the formation of a dominant marketing team and the creation of marketing plans and electronic advertising campaigns.',
    avatar: "https://i.ibb.co.com/R4YGrgP/Untitled-design-3.png",
    name: 'Said',
    title: 'https://www.said.com.sa/',
    logo: "https://i.ibb.co.com/R4YGrgP/Untitled-design-3.png" ,
  }
];

export default {
  components: {
    Hidden,
    Splide,
    SplideSlide,
    // TestiCard
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      testiContent: testiData,
      slickOptions: {
        pagination: false,
        type: 'fade',
        autoplay: true,
        interval: 3000,
        arrows: false,
        reducedMotion: {
          autoplay: true,
          speed: 500,
          rewindSpeed: 1000,
        },
      },
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
    this.loaded = true;
  },
  methods: {
    handleAfterChange(slide) {
      this.currentSlide = slide.index;
    },
    gotoSlide(index) {
      this.$refs.slider.go(index);
    },
  },
};
</script>
