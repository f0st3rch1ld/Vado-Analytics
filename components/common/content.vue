<template>
  <section class="section" :id="id" :style="sectionStyles">
    <div :class="columnsClasses">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Content",
  props: {
    id: {
      type: String,
      default: "",
    },
    vcentered: {
      type: Boolean,
      default: true,
    },
    sectionBackground: {
      type: String,
      default: "initial",
    },
  },
  computed: {
    columnsClasses() {
      return {
        columns: true,
        content: true,
        "is-vcentered": this.vcentered,
      };
    },
    sectionStyles() {
      return {
        "background-color": this.sectionBackground,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
