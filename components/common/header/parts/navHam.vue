<template>
  <button :class="burgerClasses" type="button" @click="toggleMenu()">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
export default {
  name: "NavHam",
  data() {
    return {
      menuActive: false,
    };
  },
  computed: {
    burgerClasses() {
      return {
        hamburger: true,
        "hamburger--squeeze": true,
        "is-active": this.menuActive,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
      this.$emit(toggleMenu);
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: none;
  height: 40px;
  .hamburger-box {
    width: 30px;
    height: 20px;

    .hamburger-inner {
      width: 30px;
      height: 2px;

      &::before,
      &::after {
        width: 30px;
        height: 2px;
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .hamburger {
    display: inline-block !important;
  }
}
</style>
