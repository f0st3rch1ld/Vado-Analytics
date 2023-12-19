<template>
  <header>
    <!-- Upper Header -->
    <div id="upper-header" class="px-3">
      <div class="columns content">
        <div class="column">
          <a href="mailto:info@vadoanalytics.com" class="px-3 py-2">
            <ClientOnly>
              <font-awesome-icon icon="envelope" />
            </ClientOnly>
            info@vadoanalytics.com
          </a>
        </div>
        <div class="column">
          <a
            href="https://www.linkedin.com/company/vado-analytics-com/"
            target="_blank"
            class="px-3 py-2 social-links"
          >
            <ClientOnly>
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </ClientOnly>
          </a>
          <a
            href="https://www.youtube.com/channel/UCrhINEu5tGklN2u3-cChyMQ"
            target="_blank"
            class="px-3 py-2 social-links"
          >
            <ClientOnly>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </ClientOnly>
          </a>
        </div>
      </div>
    </div>
    <!-- /Upper Header -->

    <!-- Lower Header -->
    <div id="lower-header" class="px-3">
      <div class="columns content py-2">
        <div class="column">
          <NuxtLink to="/">
            <figure class="image m-0 p-0" id="logo-large">
              <img src="~/assets/images/svg/vado-logo-2.svg" />
            </figure>
            <figure class="image m-0 p-0" id="logo-small">
              <img src="~/assets/images/svg/vado-logo-1.svg" />
            </figure>
          </NuxtLink>
        </div>
        <div class="column">
          <NavLink
            v-for="(link, index) in nav"
            :key="index"
            :link="link.link"
            :label="link.label"
            :target="link.target"
            :subMenu="link.subMenu"
          />
          <NavHam @toggleMenu="toggleMenu()" />
        </div>
      </div>
    </div>
    <!-- /Lower Header -->
  </header>
</template>

<script>
import { useNavStore } from "~/stores/navigation";
import NavLink from "./parts/navLink";
import NavHam from "./parts/navHam";

const navigation = useNavStore();

export default {
  name: "Header",
  components: {
    NavLink,
    NavHam,
  },
  data() {
    return {
      nav: navigation.getNavigation,
    };
  },
  methods: {
    toggleMenu() {},
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#upper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: $vado-blue-2;
  min-height: 38px;
  width: 100%;
  position: relative;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    svg {
      color: $vado-blue-2;
      padding: 0.25em;
    }
  }

  .columns {
    .column {
      display: flex;

      &:first-child {
        justify-content: flex-start;
      }
      &:last-child {
        justify-content: flex-end;
      }
    }
  }
}

#lower-header {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
  }

  .columns {
    align-items: center;
    .column {
      display: flex;
      flex-basis: auto;
      align-items: center;

      &:first-child {
        justify-content: flex-start;
        width: 265px;
      }
      &:last-child {
        justify-content: flex-end;
        width: calc(100% - 265px);
      }

      a,
      figure {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  #upper-header,
  #lower-header {
    .columns {
      display: flex;
    }
  }
}

#logo-small {
  display: none !important;
  width: 50px;
}

@media screen and (max-width: 400px) {
  #upper-header {
    .social-links {
      padding: 0.25rem !important;
    }
  }

  #lower-header {
    #logo-large {
      display: none;
    }
    #logo-small {
      display: flex !important;
    }
  }
}

@media screen and (max-width: 360px) {
  #upper-header {
    .social-links {
      display: none;
    }
  }
}
</style>
