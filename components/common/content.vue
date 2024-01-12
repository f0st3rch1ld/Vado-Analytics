<template>
  <section class="section" :id="id">
    <div class="columns content">
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
