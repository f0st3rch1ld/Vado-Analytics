<template>
  <ul v-if="listItems.length > 0">
    <li v-for="(item, index) in listItems" :key="index" class="my-5">
      <span v-html="item" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
      default(rawProps) {
        return [];
      },
    },
  },
};
</script>
