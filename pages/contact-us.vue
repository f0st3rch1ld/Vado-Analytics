<template>
  <div>
    <Head>
      <Title>Contact Us | Vado Analytics</Title>
    </Head>
    <TitleSection>Contact Us</TitleSection>
    <Content>
      <div class="column" id="locations-container">
        <ul>
          <li>
            <ClientOnly>
              <font-awesome-icon icon="location-dot" />
            </ClientOnly>
            Dallas, TX
          </li>
          <li>
            <ClientOnly>
              <font-awesome-icon icon="location-dot" />
            </ClientOnly>
            Washington, D.C.
          </li>
          <li>
            <ClientOnly>
              <font-awesome-icon icon="location-dot" />
            </ClientOnly>
            Chicago, IL
          </li>
        </ul>
      </div>
      <div class="column">
        <div class="box">
          <div class="columns">
            <div class="column">
              <p>
                <ClientOnly>
                  <font-awesome-icon icon="envelope" />
                </ClientOnly>
                <strong>Email Us:</strong><br />
                <a href="mailto:info@vadoanalytics.com"
                  >info@vadoanalytics.com</a
                >
              </p>
            </div>
            <div class="column">
              <p>
                <ClientOnly>
                  <font-awesome-icon icon="location-arrow" />
                </ClientOnly>
                <strong>Mailing Address:</strong><br />
                5063 Overlook Trail Fort Worth, Texas 76108
              </p>
            </div>
          </div>
        </div>
      </div>
    </Content>
  </div>
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

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#locations-container {
  background-color: $vado-blue-2;
  color: #fff;
  border-radius: 7px;
}

ul {
  list-style-type: none;
  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2em;
    font-weight: 700;
    margin: 2em 0em;

    svg {
      width: 35px;
      height: 35px;
      margin-right: 15px;
    }
  }
}

.box {
  svg {
    margin-right: 10px;
  }
}
</style>
