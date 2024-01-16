<template>
  <div>
    <Head>
      <Title>Single Location Analysis | Vado Analytics</Title>
    </Head>
    <TitleSection>Single Location Analysis</TitleSection>
    <Content>
      <div class="column">
        <h3 class="title is-size-2">Single Location Analysis</h3>
        <p>
          Using 3rd party GPS data, learn who is visiting your location, where
          they live, and who they are. This is used to build you marketplace of
          where, who, and how an advertiser should market. This is all based on
          who visits your location.<br /><br />
          You can then use this information to build a marketing campaign with
          the right creative message, aimed at the right people, and through the
          marketing mediums they most frequently engage with biggest data
          analytics companies.
        </p>
      </div>
      <div class="column">
        <figure class="image">
          <img src="~/assets/images/webp/single-location-analysis-1.webp" />
        </figure>
      </div>
    </Content>
    <Content sectionBackground="#eff1fe">
      <div class="column">
        <figure class="image">
          <img src="~/assets/images/webp/single-location-analysis-2.webp" />
        </figure>
      </div>
      <div class="column">
        <h3 class="title is-size-2">Marketing Strategy</h3>
        <p>
          From there you can dive even deeper into what you are trying to
          accomplish from a marketing campaign. Are you looking to grow,
          acquire, or maintain your consumer base in a given area?<br /><br />
          We can help you identify each area and assist in a campaign specific
          for each strategy.
        </p>
      </div>
    </Content>
  </div>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Single Location Analysis",
  components: {
    Content,
    TitleSection,
  },
};
</script>
