<template>
  <div>
    <Head>
      <Title>Contact Us | Vado Analytics</Title>
    </Head>
    <TitleSection>Contact Us</TitleSection>
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
  name: "Contact Us",
  components: {
    TitleSection,
    Content,
  },
};
</script>
