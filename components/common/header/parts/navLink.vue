<template>
  <a v-if="subMenu.length > 0" :href="link" :target="target">
    {{ label }}
    <font-awesome-icon v-if="hasSubMenu" :icon="['fas', 'caret-down']" />
    <div v-if="hasSubMenu" class="sub-menu">
      <NuxtLink
        v-for="(item, index) in subMenu"
        :to="item.link"
        :target="item.target"
        >{{ item.label }}</NuxtLink
      >
    </div>
  </a>
  <NuxtLink v-else :to="link" :target="target">{{ label }}</NuxtLink>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    link: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: "_self",
    },
    subMenu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    hasSubMenu() {
      return this.subMenu.length > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

a {
  padding: 0.3em 0.5em;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  position: relative;

  &:hover {
    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;

    .sub-menu {
      opacity: 1;
      height: auto;
      transition-timing-function: ease-in-out;
      transition-duration: 0.1s;
      transform: translateX(0px);
    }
  }

  svg {
    margin: 0px 6px;
  }

  .sub-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    opacity: 0;
    position: absolute;
    top: 30px;
    right: 15%;
    height: 0;
    overflow: hidden;
    background-color: #fff;
    border-style: solid;
    border-width: 1px;
    border-color: $grey-1;
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
    transition-timing-function: ease-in-out;
    transition-duration: 0.1s;
    transform: translateX(10px);

    a {
      width: 100%;
      text-align: right;
      text-wrap: nowrap;
      padding: 0.7em 1em;
      transition-duration: 0s;

      &:hover {
        background: linear-gradient(45deg, $vado-green-1, $vado-blue-2);
        color: #fff;
      }
    }
  }
}
</style>
