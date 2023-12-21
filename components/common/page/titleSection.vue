<template>
  <section class="section">
    <div class="columns content">
      <div class="column is-two-thirds">
        <h1 class="title">
          <slot />
        </h1>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TitleSection",
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

section {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $vado-blue-1;
  z-index: -1;
  margin-top: -135px;
  padding-top: 135px;
  min-height: 400px;

  h1 {
    font-weight: 600;
    font-size: 3.5em;
  }
}
</style>
