<template>
  <div :class="columnClasses">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    columnClasses: {
      type: String,
      default: "column",
    },
  },
};
</script>
