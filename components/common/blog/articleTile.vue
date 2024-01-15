<template>
  <div class="card">
    <NuxtLink class="card-image" :to="postLink">
      <figure class="image m-0">
        <img :src="postThumbnail()" />
      </figure>
    </NuxtLink>
    <div class="content px-4 py-5">
      <div class="block">
        <div class="columns">
          <div class="column">
            <p class="sub-title post-date">
              <font-awesome-icon icon="clock" />
              <i>{{ postDate }}</i>
            </p>
          </div>
          <div v-if="postCategory !== 'none'" class="column">
            <p class="sub-title has-text-right">
              <i>{{ postCategory }}</i>
            </p>
          </div>
        </div>

        <NuxtLink :to="postLink">
          <h2 class="title">{{ title }}</h2>
        </NuxtLink>
        <p>
          {{ descriptionSubstring }}
          <NuxtLink :to="postLink">Read More</NuxtLink>
        </p>
      </div>
      <div class="block">
        <NuxtLink class="button" :to="postLink">Read More</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article Tile",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postDate: {
      type: String,
      required: true,
    },
    postThumb: {
      type: String,
      default: "default-post-thumbnail-1.jpg",
    },
    postLink: {
      type: String,
      required: true,
    },
    postCategory: {
      type: String,
      default: "none",
    },
  },
  computed: {
    descriptionSubstring() {
      let descTrim = this.description.substr(0, 150);
      descTrim = descTrim.substr(
        0,
        Math.min(descTrim.length, descTrim.lastIndexOf(" "))
      );
      return `${descTrim}...`;
    },
  },
  methods: {
    postThumbnail() {
      return new URL(`/assets/images/blog/${this.postThumb}`, import.meta.url);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 400px;
  min-height: 625px;
  margin: 25px 10px;

  .card-image {
    figure {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 250px;
    }
  }

  .post-date {
    svg {
      margin-right: 0.5rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
