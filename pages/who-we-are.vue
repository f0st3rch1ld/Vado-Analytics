<template>
  <Head>
    <Title>Who We Are | Vado Analytics</Title>
  </Head>
  <TitleSection> Who We Are </TitleSection>
  <Content>
    <div class="column">
      <div class="block">
        <h3 class="title is-size-2">Who We Are</h3>
      </div>
      <div class="block">
        <p>
          Vado Analytics is a marketing data analytics firm with locations in
          Dallas, Washington D.C., and Chicago.
        </p>
        <p>
          We are pioneers in predictive defining competitive marketplaces with
          unique access to real-time and historical geospatial intelligence,
          anonymized mobile device data, and US consumer data with Commercial
          web traffic.
        </p>
      </div>
      <div class="block" id="who-we-are-icons">
        <div class="icon m-2">
          <ClientOnly>
            <font-awesome-icon icon="comments-dollar" />
          </ClientOnly>
          <h4 class="title has-text-centered mt-2 mb-0">
            Marketing<br />
            Consultants
          </h4>
        </div>
        <div class="icon m-2">
          <ClientOnly>
            <font-awesome-icon icon="flask" />
          </ClientOnly>
          <h4 class="title has-text-centered mt-2 mb-0">
            Data<br />
            Scientists
          </h4>
        </div>
        <div class="icon m-2">
          <ClientOnly>
            <font-awesome-icon icon="house" />
          </ClientOnly>
          <h4 class="title has-text-centered mt-2 mb-0">
            Real Estate<br />
            Specialists
          </h4>
        </div>
        <div class="icon m-2">
          <ClientOnly>
            <font-awesome-icon icon="computer" />
          </ClientOnly>
          <h4 class="title has-text-centered mt-2 mb-0">
            IT<br />
            Professionals
          </h4>
        </div>
      </div>
    </div>
    <div class="column">
      <figure class="figure">
        <img src="~/assets/images/svg/vado-logo-colored-1.svg" />
      </figure>
    </div>
  </Content>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Who We Are",
  components: {
    Content,
    TitleSection,
  },
};
</script>

<style lang="scss" scoped>
#who-we-are-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .icon {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      width: 100%;
      height: 40px;
    }
  }
}
</style>
