<template>
  <div>
    <Head>
      <Title>Contact Us | Vado Analytics</Title>
    </Head>
    <TitleSection>Contact Us</TitleSection>
    <section class="section">
      <div class="columns content">
        <div class="column is-two-fifths">
          <div class="block">
            <h3 class="title is-size-3">We have offices located in:</h3>
            <p>
              <span>
                <ClientOnly>
                  <font-awesome-icon icon="location-dot" />
                </ClientOnly>
                <strong>Dallas, TX</strong></span
              ><br />
              <span>
                <ClientOnly>
                  <font-awesome-icon icon="location-dot" />
                </ClientOnly>
                <strong>Washington, D.C.</strong></span
              ><br />
              <span>
                <ClientOnly>
                  <font-awesome-icon icon="location-dot" />
                </ClientOnly>
                <strong>Chicago, IL</strong>
              </span>
            </p>
          </div>
          <hr />
          <div class="block">
            <p>
              <ClientOnly>
                <font-awesome-icon icon="envelope" />
              </ClientOnly>
              <strong>Email Us:</strong><br />
              <a href="mailto:info@vadoanalytics.com">info@vadoanalytics.com</a>
            </p>
          </div>
          <hr />
          <div class="block">
            <p>
              <ClientOnly>
                <font-awesome-icon icon="location-arrow" />
              </ClientOnly>
              <strong>Mailing Address:</strong><br />
              5063 Overlook Trail Fort Worth, Texas 76108
            </p>
          </div>
        </div>

        <div class="column">
          <ContactUsForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TitleSection from "~/components/common/page/titleSection";
import ContactUsForm from "~/components/page/contact-us/contactUsForm";

export default {
  name: "Contact Us",
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
