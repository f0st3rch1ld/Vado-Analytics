<template>
  <h1 v-if="titleType === 'h1'" :class="titleClasses">
    <slot />
  </h1>
  <h2 v-else-if="titleType === 'h2'" :class="titleClasses">
    <slot />
  </h2>
  <h3 v-else-if="titleType === 'h3'" :class="titleClasses">
    <slot />
  </h3>
  <h4 v-else-if="titleType === 'h4'" :class="titleClasses">
    <slot />
  </h4>
  <h5 v-else-if="titleType === 'h5'" :class="titleClasses">
    <slot />
  </h5>
  <h6 v-else-if="titleType === 'h6'" :class="titleClasses">
    <slot />
  </h6>
</template>

<script>
export default {
  props: {
    titleType: {
      type: String,
      default: "h2",
    },
    titleClasses: {
      type: String,
      default: "title",
    },
  },
};
</script>
