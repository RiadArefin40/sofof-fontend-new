<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="img"
        cover
        class="white--text"
        height="200px"
      />
    </div>
    <div class="properties">
      <strong class="use-text-subtitle text-truncate">
        <span>
          {{ title }}
        </span>
      </strong>
      <v-card-subtitle>
        {{ date }}
      </v-card-subtitle>
      <v-card-text class="desc">
        <span class="text-body-1">
          <span>{{ desc }}</span>
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :href="href"
          variant="outlined"
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
    date: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
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
};
</script>
