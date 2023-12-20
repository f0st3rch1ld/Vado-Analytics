<template>
  <button :class="burgerClasses" type="button">
    <div :class="mobileMenuClasses">
      <div class="mobile-menu-container">
        <NuxtLink to="/" target="_self" @click="toggleMenu()">Home</NuxtLink>
        <NuxtLink
          v-for="(navItem, index) in nav"
          :key="index"
          :to="navItem.link"
          :target="navItem.target"
          @click="toggleMenu()"
          >{{ navItem.label }}</NuxtLink
        >
      </div>
    </div>
    <span class="hamburger-box" @click="toggleMenu()">
      <span class="hamburger-inner"></span>
    </span>
  </button>
</template>

<script>
import { useNavStore } from "~/stores/navigation";

const navigation = useNavStore();

export default {
  name: "NavHam",
  data() {
    return {
      menuActive: false,
      nav: navigation.getNavigation,
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
    mobileMenuClasses() {
      return {
        "mobile-menu": true,
        "is-active": this.menuActive,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: none;
  height: 40px;
  position: relative;
  z-index: 1;

  &.is-active {
    &:hover {
      opacity: 1;
    }
  }

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

.mobile-menu {
  background-color: #fff;
  border-radius: 7px 0px 7px 7px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  height: 0px;
  width: 0px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
  transition-delay: 0.2s;
  overflow: hidden;

  &.is-active {
    height: 300px;
    width: 180px;
    transition-timing-function: ease-in-out;
    transition-duration: 0.3s;
    transition-delay: 0.2s;
  }

  .mobile-menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 50px 10px;

    a {
      padding: 8px;
      text-wrap: nowrap;
      font-weight: 600;
    }
  }
}

@media screen and (max-width: 900px) {
  .hamburger {
    display: inline-block !important;
  }
}
</style>
