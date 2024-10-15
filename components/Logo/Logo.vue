<template>
  <span :class="type" class="logo">
    <img :src="logo" alt="logo">
    {{ type !== 'only' ? brand.saas.name : '' }}
  </span>
</template>

<style scoped lang="scss">
@import './logo-style.scss';
</style>

<script>
import logo from '@/assets/images/sass-logo.jpeg';
import brand from '@/assets/text/brand';

export default {
  props: {
    type: {
      type: String,
      default: 'only',
    },
  },
  data() {
    return {
      brand,
      logo,
    };
  },
};
</script>
