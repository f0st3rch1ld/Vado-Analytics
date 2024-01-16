<template>
  <section class="section" id="transform-your-business-content">
    <div class="columns content">
      <div class="column is-three-fifths" id="transform-your-business-video">
        <figure class="image 16by9">
          <video
            class="has-ratio"
            src="https://vadoanalytics.com/wp-content/uploads/2022/02/Vado-Animation.mp4"
            muted="muted"
            controlslist="nodownload"
            autoplay
            loop
            controls
          ></video>
        </figure>
      </div>
      <div class="column" id="transform-your-business-text">
        <div class="block">
          <h2 class="is-size-1">
            Transform Your Business with Marketing Analytics and Competitive
            Intelligence
          </h2>
        </div>
        <div class="block">
          <p>
            We treat our customers as partners, working with them until they are
            100% satisfied. Our focus is long term relationships, not short-term
            sales.
          </p>
        </div>
        <div class="block">
          <div class="columns">
            <div class="column">
              <h3 class="title is-size-4">
                <span>1000+</span><br />
                Projects Completed
              </h3>
              <p>
                <strong>
                  Resulting in consistent sales lift for each client.
                </strong>
              </p>
            </div>
            <div class="column">
              <h3 class="title is-size-4">
                <span>100%</span><br />
                Customer Satisfaction
              </h3>
              <p>
                <strong>
                  We are not a marketing agency; we are an analytics firm that
                  works with you until you are satisfied.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Transform Your Business",
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#transform-your-business-content {
  position: relative;
  z-index: 1;
  background-image: url("~/assets/images/svg/swoosh-grey-1.svg");
  background-repeat: no-repeat;
  background-size: calc(3750px - 120%);
  background-position: center;
  height: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4em;

  .content {
    margin-bottom: auto !important;
  }

  #transform-your-business-text {
    h2 {
      font-size: 2.5em !important;
      font-weight: 700 !important;
      background: -webkit-linear-gradient(45deg, $vado-blue-2, $vado-green-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      padding-bottom: 5px;
    }

    h3 {
      span {
        font-size: 1.5em;
        font-weight: 700;
        background: -webkit-linear-gradient(45deg, $vado-blue-2, $vado-green-1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  #transform-your-business-video {
    position: relative;
    display: flex;
    align-items: center;
  }
}

@media screen and (min-width: 1600px) {
  #transform-your-business-content {
    background-size: 100vw;
    height: 60vw;
    margin-top: -4em;

    #transform-your-business-text {
      margin-top: -4.5vw;
    }

    #transform-your-business-video {
      margin-bottom: -9vw;
    }
  }
}

@media screen and (max-width: 1024px) {
  #transform-your-business-content {
    padding-top: 3em;
    padding-bottom: 3em;
    height: auto;

    #transform-your-business-text {
      margin-top: 0;
    }

    #transform-your-business-image {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  #transform-your-business-content {
    #transform-your-business-image {
      figure {
        display: none;
      }
    }
  }
}
</style>
