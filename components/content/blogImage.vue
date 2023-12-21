<template>
  <figure class="image">
    <img :src="imageSource" />
  </figure>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
  },
  computed: {
    imageSource() {
      return new URL(`/assets/images/blog/${this.imgSrc}`, import.meta.url);
    },
  },
};
</script>
