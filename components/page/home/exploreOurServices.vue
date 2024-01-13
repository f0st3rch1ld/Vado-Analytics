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
            <div class="column"></div>
            <div class="column"></div>
          </div>
        </div>
        <div class="slider-content" id="multi-location-analysis-content">
          <div class="columns content">
            <div class="column"></div>
            <div class="column"></div>
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
      this.activeSlide = slide;
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
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
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
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    transition-timing-function: ease-out;
    transition-duration: .3s;

    .slider-content {
      width: 100vw;
      min-height: 500px;
      display: inline-block;

      &#single-location-analysis-content {
        background: linear-gradient(90deg, $vado-blue-2, $vado-green-1);
      }

      &#multi-location-analysis-content {
        background: linear-gradient(90deg, $vado-orange-1, $vado-orange-2);
      }
    }
  }
}
</style>
