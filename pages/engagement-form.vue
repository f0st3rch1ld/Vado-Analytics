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
import ContactUsForm from "~/components/page/contact-us/contactUsForm";

export default {
  name: "Engagement Form",
  components: {
    TitleSection,
    ContactUsForm,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

svg {
  margin-right: 10px;
}
</style>
