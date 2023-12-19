<template>
  <Content>
    <ContentDoc>
      <template #not-found>
        <h1>Page not found</h1>
      </template>
    </ContentDoc>
  </Content>
</template>

<script>
import Content from "~/components/common/content";

export default {
  components: {
    Content,
  },
};
</script>
