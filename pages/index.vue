<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>
    <TitleSection> Home </TitleSection>
    <Content>
      <div class="column is-full">
        <p>Page Content</p>
      </div>
    </Content>
  </div>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Home",
  components: {
    Content,
    TitleSection,
  },
};
</script>
