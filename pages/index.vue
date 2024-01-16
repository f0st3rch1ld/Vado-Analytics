<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>
    <Splash />
    <WhoWeAre />

    <!-- Why Us -->
    <section class="section" id="why-us-container">
      <div class="columns content is-vcentered">
        <div class="column">
          <figure class="image">
            <img
              src="~/assets/images/webp/Defining-Competitive-Marketplaces-new.webp"
            />
          </figure>
        </div>
        <div class="column is-two-fifths">
          <div class="block">
            <h2 class="title is-size-1">
              <span>WHY US</span><br />
              Defining Competitive Marketplaces
            </h2>
          </div>
          <div class="block">
            <p>
              Defining competitive marketplaces involves tracking and studying
              anonymous consumer populations as they move from location to
              location.
            </p>
            <p>
              Our unique engagements data access to anonymized GPS data reveals
              locations consumers have visited from their residence. We are then
              able to use a variety of 3rd party sources to learn who these
              consumers are, and what they are interested in.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /Why Us -->

    <ExploreOurServices />

    <!-- Operations -->
    <section class="section" id="operations-container">
      <div class="columns content is-vcentered">
        <div class="column is-two-fifths">
          <div class="block">
            <h2 class="title is-size-1">
              <span>OPERATIONS</span><br />
              Focused on Actionable Insights
            </h2>
          </div>
          <div class="block">
            <p>
              We will work with you to develop an actionable plan to grow your
              business.
            </p>
          </div>
          <div class="block">
            <ul>
              <li>
                <ClientOnly
                  ><font-awesome-icon icon="circle-check" /></ClientOnly
                >&nbsp;Realize who your customers are.
              </li>
              <li>
                <ClientOnly
                  ><font-awesome-icon icon="circle-check" /></ClientOnly
                >&nbsp;Understand what they are interested in.
              </li>
              <li>
                <ClientOnly
                  ><font-awesome-icon icon="circle-check" /></ClientOnly
                >&nbsp;Know the best way to communicate with them.
              </li>
            </ul>
          </div>
        </div>
        <div class="column" id="operations-images">
          <figure class="image" id="image-1">
            <img
              src="~/assets/images/webp/Focused-on-Actionable-Insights-1.webp"
            />
          </figure>
          <figure class="image" id="image-2">
            <img
              src="~/assets/images/webp/Focused-on-Actionable-Insights-2.webp"
            />
          </figure>
        </div>
      </div>
    </section>
    <!-- /Operations -->

    <TransformYourBusiness />
    <RecentPosts />
  </div>
</template>

<script>
import Splash from "~/components/page/home/splash";
import ExploreOurServices from "~/components/page/home/exploreOurServices";
import WhoWeAre from "~/components/page/home/whoWeAre";
import TransformYourBusiness from "~/components/page/home/transformYourBusiness";
import RecentPosts from "~/components/common/blog/recentPosts";

export default {
  name: "Home",
  components: {
    Splash,
    WhoWeAre,
    ExploreOurServices,
    TransformYourBusiness,
    RecentPosts,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#why-us-container {
  figure {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  }
}

#operations-container {
  ul {
    list-style-type: none;
    li {
      font-weight: 700;
      margin-top: 1em;
      margin-bottom: 1em;

      svg {
        color: $vado-green-2;
        margin-right: 0.5em;
      }
    }
  }

  #operations-images {
    position: relative;
    min-height: 450px;
    figure {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      position: absolute;

      img {
        max-width: 500px;
      }

      &#image-1 {
        top: 0;
        left: 0;
      }

      &#image-2 {
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
