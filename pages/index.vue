<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>
    <Splash />
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
import Splash from "~/components/page/home/splash";

export default {
  name: "Home",
  components: {
    Content,
    TitleSection,
    Splash,
  },
};
</script>
