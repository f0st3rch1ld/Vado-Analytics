<template>
  <Content>
    <div id="tiles-container">
      <NuxtLink
        to="/services/single-location-analysis"
        class="service-tile"
        id="single-location-analysis"
      >
        <h2 class="title">Single Location Analysis</h2>
        <figure class="image">
          <img src="~/assets/images/webp/single-location-analysis.webp" />
        </figure>
        <hr />
        <p>
          Using 3rd party GPS data, learn who is visiting your location, where
          they live, and who they are. This is used to build you marketplace of
          where, who, and how an advertiser should market. This is all based on
          who visits your location.
        </p>
        <button class="button is-fullwidth is-medium">Learn More</button>
      </NuxtLink>

      <NuxtLink
        to="/services/multi-location-analysis"
        class="service-tile"
        id="multi-location-analysis"
      >
        <h2 class="title">Multi-Location Analysis</h2>
        <figure class="image">
          <img src="~/assets/images/webp/multi-location-analysis.webp" />
        </figure>
        <hr />
        <p>
          Using 3rd party GPS data, learn who is visiting your location, who is
          visiting your competitors’ locations, and who to market to in order to
          increase your marketshare.
        </p>
        <button class="button is-fullwidth is-medium">Learn More</button>
      </NuxtLink>

      <NuxtLink
        to="/services/new-location-placement"
        class="service-tile"
        id="new-location-placement"
      >
        <h2 class="title">New Location Placement</h2>
        <figure class="image">
          <img src="~/assets/images/webp/new-location-placement.webp" />
        </figure>
        <hr />
        <p>
          Stop guessing on where to open your location. Using 3rd party GPS data
          we can tell you the optimal area to open you new location based on who
          goes to your store, your competitors’ stores, and the areas that are
          least served in the marketplace.
        </p>
        <button class="button is-fullwidth is-medium">Learn More</button>
      </NuxtLink>

      <NuxtLink
        to="/services/custom-analytics-projects"
        class="service-tile"
        id="custom-analytics-projects"
      >
        <h2 class="title">Custom Analytics Projects</h2>
        <figure class="image">
          <img src="~/assets/images/webp/custom-analytics-projects.webp" />
        </figure>
        <hr />
        <p>
          Our most frequent engagements. Combine the power of 3rd party GPS
          sources with your 1st party sales data to get a truly refined sense of
          the marketplace. We layer your sales data on top of your competitors’
          traffic to get a sense of where, who, and how you should be marketing
          to maximize ROI.
        </p>
        <button class="button is-fullwidth is-medium">Learn More</button>
      </NuxtLink>
    </div>
  </Content>
</template>

<script>
import Content from "~/components/common/content";
export default {
  name: "Services Tiles",
  components: {
    Content,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#tiles-container {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;

  .service-tile {
    width: 275px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    padding: 2rem;
    border-radius: 7px;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);
    border-style: solid;
    border-width: 1px;
    border-color: $grey-2;

    h2 {
      text-align: center;
      font-weight: 700 !important;
    }

    p {
      min-height: 290px;
    }

    figure {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      overflow: hidden;
      border-width: 4px;
      border-color: $grey-2;
      border-style: solid;
      padding: 25px;
      margin: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);

      img {
        height: auto;
        width: 90%;
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;
      }
    }

    &#single-location-analysis {
      &:hover,
      &.is-active {
        h2 {
          color: $vado-blue-2 !important;
        }
        figure {
          border-color: $vado-blue-2;
        }
      }
    }

    &#multi-location-analysis {
      &:hover,
      &.is-active {
        h2 {
          color: $vado-orange-1 !important;
        }
        figure {
          border-color: $vado-orange-1;
        }
      }
    }

    &#new-location-placement {
      &:hover,
      &.is-active {
        h2 {
          color: $vado-green-2 !important;
        }
        figure {
          border-color: $vado-green-2;
        }
      }
    }

    &#custom-analytics-projects {
      &:hover,
      &.is-active {
        h2 {
          color: $vado-red-1 !important;
        }
        figure {
          border-color: $vado-red-1;
        }
      }
    }

    &:hover {
      figure {
        img {
          width: 100%;
          transition-timing-function: ease-in-out;
          transition-duration: 0.2s;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  #tiles-container {
    .service-tile {
      width: 40%;
    }
  }
}

@media screen and (max-width: 768px) {
  #tiles-container {
    .service-tile {
      width: 100%;
    }
  }
}
</style>
