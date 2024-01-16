<template>
  <div>
    <Head>
      <Title>Multi-Location Analysis | Vado Analytics</Title>
    </Head>
    <TitleSection>Multi-Location Analysis</TitleSection>
    <Content>
      <div class="column">
        <h3 class="title is-size-2">Multi-Location Analysis</h3>
        <p>
          Using 3rd party GPS data, learn who is visiting your location, who is
          visiting your competitors’ locations, and who to market to in order to
          increase your marketshare.<br /><br />Not only can Vado tell you who
          and where your customers live, we can tell you all about your
          competitors. Build a comprehensive marketing strategy that will
          deliver the optimal ROI for your spend.
        </p>
      </div>
      <div class="column">
        <figure class="image">
          <img src="~/assets/images/webp/multi-location-analysis-1.webp" />
        </figure>
      </div>
    </Content>
    <Content sectionBackground="#eff1fe">
      <div class="column">
        <figure class="image">
          <img src="~/assets/images/webp/multi-location-analysis-2.webp" />
        </figure>
      </div>
      <div class="column">
        <h3 class="title is-size-2">Marketing Strategy</h3>
        <p>
          You are not the only one who defines your marketplace. Competition
          determines how far people are willing to come to you, how they prefer
          you compared to your competitors, and the approach to capture
          marketshare.<br /><br />
          Know how you stack up against your competitors, where to gain
          marketshare, and the optimal marketing plans to grow your business.
        </p>
      </div>
    </Content>
  </div>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  name: "Multi-Location Analysis",
  components: {
    Content,
    TitleSection,
  },
};
</script>
