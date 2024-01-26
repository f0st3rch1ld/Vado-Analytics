<template>
  <div>
    <Head>
      <Title>Engagement | Vado Analytics</Title>
    </Head>
    <TitleSection>Engagement Form</TitleSection>
    <section class="section">
      <div class="columns content">
        <div class="column is-centered">
          <EngagementForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleSection from "~/components/common/page/titleSection";
import EngagementForm from "~/components/page/engagement-form/engagementForm";

export default {
  name: "Engagement Form",
  components: {
    TitleSection,
    EngagementForm,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

svg {
  margin-right: 10px;
}
</style>
