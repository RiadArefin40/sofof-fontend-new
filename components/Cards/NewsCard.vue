<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="img"
        class="white--text"
        height="200px"
        cover
      />
    </div>
    <div :class="startPadding" class="properties">
      <v-card-subtitle class="head-line">
        {{ headline }}
      </v-card-subtitle>
      <div class="use-text-subtitle2 news-title">
        {{ title }}
      </div>
      <v-card-actions>
        <v-spacer v-if="orientation === 'portrait'" />
        <v-btn
          :size="orientation === 'landscape' ? 'small' : 'regular'"
          :href="href"
          variant="text"
          class="action-btn"
          color="primary"
        >
          Read more
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './post-news-card';
</style> 

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      default: 'news',
    },
    orientation: {
      type: String,
      default: 'portrait',
    },
    type: {
      type: String,
      default: 'full', // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#',
    },
  },
  computed: {
    startPadding() {
      return {
        'ps-0': this.orientation === 'landscape' && this.type !== 'over',
      };
    },
  },
};
</script>
