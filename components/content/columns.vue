<template>
  <div :class="columnsClasses">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    columnsClasses: {
      type: String,
      default: "columns",
    },
  },
};
</script>
