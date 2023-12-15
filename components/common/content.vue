<template>
  <section class="section">
    <div class="columns content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  justify-content: center;
}
</style>
