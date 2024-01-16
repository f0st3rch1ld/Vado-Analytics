<template>
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
</template>

<script>
import SplashLogo from "./parts/splashLogo";
export default {
  name: "Splash",
  components: {
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
  opacity: 0.5;
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
</style>
