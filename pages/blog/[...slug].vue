<template>
  <ContentDoc v-slot="{ doc }">
    <TitleSection>{{ doc.title }}</TitleSection>
    <Content>
      <ContentRenderer :value="doc" />
    </Content>
  </ContentDoc>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  components: {
    Content,
    TitleSection,
  },
};
</script>
