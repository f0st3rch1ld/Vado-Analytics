<template>
  <TitleSection>Vado Blog</TitleSection>
  <Content>
    <div class="column is-full">
      <ContentDoc />
    </div>
  </Content>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Contact Us",
  components: {
    Content,
    TitleSection,
  },
};
</script>
