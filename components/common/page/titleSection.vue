<template>
  <section class="section">
    <div class="columns content is-vcentered">
      <div class="column is-full">
        <h1 class="title">
          <slot />
        </h1>
      </div>
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
  background-image: url("~/assets/images/webp/header-background-1.webp");
  background-repeat: no-repeat;
  background-position: 90% 40%;
  background-size: 650px;

  h1 {
    font-weight: 600;
    font-size: 3.5em;
  }
}
</style>
