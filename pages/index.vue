<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>
    <TitleSection>Home</TitleSection>
    <Content>
      <div class="column is-full">
        <p>Page Content</p>
      </div>
    </Content>
  </div>
</template>

<script>
import TitleSection from "~/components/common/page/titleSection";
import Content from "~/components/common/content";

export default {
  name: "Home",
  components: {
    TitleSection,
    Content,
  },
};
</script>
