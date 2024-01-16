<template>
  <section class="section px-0" id="explore-our-services-container">
    <!-- Title and Icons -->
    <div class="columns content is-multiline" id="icons-container">
      <div class="column is-full">
        <h2 class="title is-size-1 has-text-centered">
          <span>OUR SERVICES</span><br />
          Explore Our Services
        </h2>
      </div>
      <div
        class="column is-full is-flex is-justify-content-space-evenly is-align-items-center is-flex-wrap-wrap"
      >
        <div
          :class="iconClasses(0)"
          id="single-location-analysis"
          @click="switchSlide(0)"
        >
          <h4>Single Location Analysis</h4>
          <figure class="image">
            <img src="~/assets/images/webp/single-location-analysis.webp" />
          </figure>
        </div>
        <div
          :class="iconClasses(1)"
          id="multi-location-analysis"
          @click="switchSlide(1)"
        >
          <h4>Multi-Location-Analysis</h4>
          <figure class="image">
            <img src="~/assets/images/webp/multi-location-analysis.webp" />
          </figure>
        </div>
        <div
          :class="iconClasses(2)"
          id="new-location-placement"
          @click="switchSlide(2)"
        >
          <h4>New Location Placement</h4>
          <figure class="image">
            <img src="~/assets/images/webp/new-location-placement.webp" />
          </figure>
        </div>
        <div
          :class="iconClasses(3)"
          id="custom-analytics-projects"
          @click="switchSlide(3)"
        >
          <h4>Custom Analytics Pojects</h4>
          <figure class="image">
            <img src="~/assets/images/webp/custom-analytics-projects.webp" />
          </figure>
        </div>
      </div>
    </div>
    <!-- /Title and Icons -->

    <!-- Content Containers -->
    <div class="content-container">
      <div class="slider" :style="sliderStyles">
        <div class="slider-content" id="single-location-analysis-content">
          <div class="columns content">
            <div class="column">
              <h3 class="title is-size-2">Marketplaces</h3>
              <p>
                Who are your customers? Learn all about who your customers are,
                where they live, who else should be your customer, and where/how
                to market to them<br /><br />But what about the competition?
                Overlay your customers with your competition to get a true
                picture of how you perform in the market
              </p>
            </div>
            <div class="column">
              <h3 class="title is-size-2">Optimizing Market Performance</h3>
              <p>
                Where should a location be placed? Using you and your
                competitors’ customer data, identify the optimal site to place a
                new location in each geography.<br /><br />Already have consumer
                data? Overlay your first party information with your competitors
                consumers to develop a more precise competitive marketplace.
              </p>
            </div>
          </div>
        </div>
        <div class="slider-content" id="multi-location-analysis-content">
          <div class="columns content">
            <div class="column">
              <h3 class="title is-size-2">Multi-Location Analysis</h3>
              <p>
                Using 3rd party GPS data, learn who is visiting your location,
                who is visiting your competitors’ locations, and who to market
                to in order to increase your marketshare.<br /><br />Not only
                can Vado tell you who and where your customers live, we can tell
                you all about your competitors. Build a comprehensive marketing
                strategy that will deliver the optimal ROI for your spend.
              </p>
            </div>
            <div class="column">
              <h3 class="title is-size-2">Marketing Strategy</h3>
              <p>
                You are not the only one who defines your marketplace.
                Competition determines how far people are willing to come to
                you, how they prefer you compared to your competitors, and the
                approach to capture marketshare.<br /><br />Know how you stack
                up against your competitors, where to gain marketshare, and the
                optimal marketing plans to grow your business
              </p>
            </div>
          </div>
        </div>
        <div class="slider-content" id="new-location-placement-content">
          <div class="columns content">
            <div class="column">
              <h3 class="title is-size-2">New Location Placement</h3>
              <p>
                Stop guessing on where to open your location. Using 3rd party
                GPS data we can tell you the optimal area to open you new
                location based on who goes to your store, your competitors’
                stores, and the areas that are least served in the
                marketplace.<br /><br />Instead of guessing one of the most
                important aspects of your business, make an informed decision of
                where your new location should be. In addition, use our analysis
                to determine the appropriate marketing plan to ensure that your
                new locations is a success.
              </p>
            </div>
            <div class="column">
              <h3 class="title is-size-2">Strategic Location Selection</h3>
              <p>
                Our approach is to be with you from start to finish of your
                location expansion. We recommend where your location should be
                and will work with your real estate team to determine the
                appropriate sites.<br /><br />But that is only half of the
                effort, we will then work with your marketing departments to
                implement a marketing strategy that ensures results. If we have
                1st party transaction detail we are also able to provided an
                expected revenue forecast for the first 24 months of the new
                store, so you are able to plan accordingly.
              </p>
            </div>
          </div>
        </div>
        <div class="slider-content" id="custom-analytics-projects-content">
          <div class="columns content">
            <div class="column">
              <h3 class="title is-size-2">Custom Analytics Projects</h3>
              <p>
                Our most frequent engagements. Combine the power of 3rd party
                GPS sources with your 1st party sales data to get a truly
                refined sense of the marketplace. We layer your sales data on
                top of your competitors’ traffic to get a sense of where, who,
                and how you should be marketing to maximize ROI.
              </p>
            </div>
            <div class="column">
              <h3 class="title is-size-2">Partnership Approach</h3>
              <p>
                Our partnership approach ensures that we will assist you with
                not only your initial campaign deployment, but a custom machine
                learning model that continuously enhances your marketing efforts
                to optimize ROI.<br /><br />We partner with you after deployment
                to assist your marketing teams on enhancements to your marketing
                campaigns to ensure success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Content Containers -->
  </section>
</template>

<script>
export default {
  name: "Explore Our Services",
  data() {
    return {
      activeSlide: 0,
      navigated: false,
      window: {
        width: 0,
      },
    };
  },
  computed: {
    sliderStyles() {
      return {
        left: `-${this.activeSlide * this.window.width}px`,
      };
    },
  },
  methods: {
    switchSlide(slide) {
      if (!this.navigated) {
        this.navigated = true;
      }
      this.activeSlide = slide;
    },
    autoIncrement() {
      if (!this.navigated) {
        if (this.activeSlide === 3) {
          this.activeSlide = 0;
        } else {
          this.activeSlide++;
        }
      }
    },
    iconClasses(slide) {
      return {
        icon: true,
        "is-active": slide === this.activeSlide,
      };
    },
    handleResize() {
      this.window.width = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    setInterval(this.autoIncrement, 5000);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
    clearInterval(this.autoIncrement);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#icons-container {
  position: relative;
  z-index: 1;
}

.icon {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  height: 200px;
  margin: 10px;

  h4 {
    text-align: center;
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
      h4 {
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
      h4 {
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
      h4 {
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
      h4 {
        color: $vado-red-1 !important;
      }
      figure {
        border-color: $vado-red-1;
      }
    }
  }

  &:hover,
  &.is-active {
    h4 {
      transition-timing-function: ease-in-out;
      transition-duration: 0.2s;
    }
    figure {
      img {
        width: 100%;
        transition-timing-function: ease-in-out;
        transition-duration: 0.2s;
      }
    }
  }
}

.content-container {
  background-color: $grey-1;
  min-height: 500px;
  width: 100%;
  margin-top: -85px;
  position: relative;

  .slider {
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;

    .slider-content {
      width: 100vw;
      min-height: 500px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      margin: 0;
      padding: 3rem 3rem;

      .columns {
        margin: 0;
      }

      h3,
      p {
        color: #fff;
      }

      &#single-location-analysis-content {
        background: linear-gradient(90deg, $vado-blue-2, $vado-green-1);
      }
      &#multi-location-analysis-content {
        background: linear-gradient(90deg, $vado-orange-1, $vado-orange-2);
      }
      &#new-location-placement-content {
        background: linear-gradient(90deg, $vado-green-1, $vado-green-2);
      }
      &#custom-analytics-projects-content {
        background: linear-gradient(90deg, $vado-red-1, $vado-orange-1);
      }
    }
  }
}
</style>
