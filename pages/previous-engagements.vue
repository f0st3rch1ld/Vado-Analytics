<template>
  <Head>
    <Title>What We've Done | Vado Analytics</Title>
  </Head>
  <TitleSection> What We've Done </TitleSection>
  <Content>
    <div class="column is-full">
      <p>Page Content</p>
    </div>
  </Content>
</template>

<script>
// NOTE: I left this page here for now. It is temporarily redirected to the home page. To disable the redirect, open the nuxt.config.ts file in the root directory, and remove the redirect placed on the previous-engagements page from the route rules object.

// NOTE: To re-enable the previous-engagements page inside the navigation on the website. Open the navigation.js file inside of the stores directory, and uncomment it's route from the navigation array.

import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Previous Engagements",
  components: {
    Content,
    TitleSection,
  },
};
</script>
