<template>
  <TitleSection>Vado Blog</TitleSection>
  <!-- <Content>
    <ClientOnly>
      <ContentList path="/blog" v-slot="{ list }">
        <Pagination :data="list" />
      </ContentList>
    </ClientOnly>
  </Content> -->
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";
import Pagination from "~/components/common/blog/pagination";

export default {
  name: "Contact Us",
  components: {
    Content,
    TitleSection,
    Pagination,
  },
};
</script>
