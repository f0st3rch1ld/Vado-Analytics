<template>
  <TitleSection>{{ article }}</TitleSection>
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
import TitleSection from "~/components/common/page/titleSection";

export default {
  components: {
    Content,
    TitleSection,
  },
  mounted() {
    console.log(this.article);
  },
};
</script>
