<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>

    <!-- Splash -->
    <div id="splash-background"></div>
    <section class="section" id="splash-content">
      <div class="columns content">
        <div class="column is-three-fifths">
          <h1 class="title">
            <span id="defining">Defining</span><br />
            <span id="competitive">Competitive</span><br />
            <span id="marketplaces">Marketplaces</span>
          </h1>
        </div>
        <div class="column" id="splash-logo">
          <ClientOnly>
            <SplashLogo />
          </ClientOnly>
        </div>
      </div>
    </section>
    <!-- /Splash -->

    <!-- Who We Are -->
    <section class="section" id="who-we-are-content">
      <div class="columns content">
        <div class="column" id="who-we-are-text">
          <div class="block">
            <h2 class="title is-size-1">
              <span>ABOUT US</span><br />
              Who We Are
            </h2>
          </div>
          <div class="block">
            <p>
              Vado Analytics is a marketing data analytics firm with locations
              in Dallas, Washington D.C., and Chicago.
            </p>
            <p>
              We are pioneers in predictive defining competitive marketplaces
              with unique access to real-time and historical geospatial
              intelligence, anonymized mobile device data, and US consumer data
              with Commercial web traffic.
            </p>
          </div>
          <div class="block" id="who-we-are-icons">
            <div class="icon m-2">
              <ClientOnly>
                <font-awesome-icon icon="comments-dollar" />
              </ClientOnly>
              <h4 class="title has-text-white has-text-centered mt-2 mb-0">
                Marketing<br />
                Consultants
              </h4>
            </div>
            <div class="icon m-2">
              <ClientOnly>
                <font-awesome-icon icon="flask" />
              </ClientOnly>
              <h4 class="title has-text-white has-text-centered mt-2 mb-0">
                Data<br />
                Scientists
              </h4>
            </div>
            <div class="icon m-2">
              <ClientOnly>
                <font-awesome-icon icon="house" />
              </ClientOnly>
              <h4 class="title has-text-white has-text-centered mt-2 mb-0">
                Real Estate<br />
                Specialists
              </h4>
            </div>
            <div class="icon m-2">
              <ClientOnly>
                <font-awesome-icon icon="computer" />
              </ClientOnly>
              <h4 class="title has-text-white has-text-centered mt-2 mb-0">
                IT<br />
                Professionals
              </h4>
            </div>
          </div>
          <div class="block">
            <NuxtLink to="who-we-are" class="button is-white is-outlined"
              >Learn More</NuxtLink
            >
          </div>
        </div>
        <div class="column" id="who-we-are-image">
          <figure class="image">
            <img src="~/assets/images/svg/vado-logo-white.svg" />
          </figure>
        </div>
      </div>
    </section>
    <!-- /Who We Are -->

    <Content>
      <div class="column is-full">
        <p>Page Content</p>
      </div>
    </Content>
  </div>
</template>

<script>
import { reloadNuxtApp } from "nuxt/app";
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";
import SplashLogo from "~/components/page/home/splashLogo";

export default {
  name: "Home",
  components: {
    Content,
    TitleSection,
    SplashLogo,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#splash-background {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  background: linear-gradient(180deg, $vado-blue-1, #fff);
}

#splash-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -135px;
  padding-top: 100px;
  height: 100vh;
  min-height: 550px;
  width: 100vw;

  .content {
    margin: auto !important;
  }
}

#splash-logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  position: relative;
  z-index: 1;
  pointer-events: none;
  margin-top: -5vw;

  #defining {
    font-weight: 300;
  }

  #competitive,
  #marketplaces {
    font-weight: 900;
    font-size: 7vw;
    line-height: 0.8;
    color: $vado-blue-3;
  }
}

#who-we-are-content {
  margin: -200px 0px 0px 0px;
  color: #fff;
  position: relative;
  z-index: 1;
  pointer-events: none;
  background-image: url("~/assets/images/svg/swoosh-color-1.svg");
  background-repeat: no-repeat;
  background-size: calc(3750px - 120%);
  background-position: center;
  height: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin-bottom: auto !important;
  }

  #who-we-are-text {
    margin-top: -8vw;
  }

  #who-we-are-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .icon {
      width: fit-content;
      height: fit-content;
      color: #fff;
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

  .button {
    pointer-events: all;
  }

  #who-we-are-image {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: -13vw;

    figure {
      position: absolute;

      img {
        height: 50vw;
      }
    }
  }

  h2,
  p {
    color: #fff;
  }

  #who-we-are-swoosh {
    position: absolute;
    width: 100vw;
    top: 0;
    pointer-events: none;
  }
}

@media screen and (min-width: 1600px) {
  #who-we-are-content {
    background-size: 100vw;
    height: 60vw;
  }
}

@media screen and (max-width: 1024px) {
  #who-we-are-content {
    background: linear-gradient(135deg, $vado-green-1, $vado-blue-2);
    padding-top: 3em;
    padding-bottom: 3em;
    height: auto;

    #who-we-are-text {
      margin-top: 0;
    }

    #who-we-are-image {
      margin-bottom: 0;
    }
  }
}

@media screen and (max-width: 768px) {
  #who-we-are-content {
    #who-we-are-image {
      figure {
        display: none;
      }
    }
  }
}
</style>
