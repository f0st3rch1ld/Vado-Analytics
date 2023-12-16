<template>
  <footer>
    <!-- Upper Footer -->
    <div id="upper-footer" class="pt-4 pb-6 px-3">
      <div class="columns py-6 content is-multiline">
        <div class="column" id="footer-left">
          <div class="block">
            <NuxtLink to="/">
              <figure class="image m-0 p-0">
                <img src="~/assets/images/svg/vado-logo-2.svg" />
              </figure>
            </NuxtLink>
          </div>
          <div class="block px-3">
            <p>
              Vado Analytics has offices in Dallas, Washington D.C., and
              Chicago.<br /><br />
              Vado means GO in Latin, lets GO determine your market.
            </p>
          </div>
        </div>
        <div class="column pl-6" id="footer-right">
          <div class="columns is-multiline pt-5">
            <div class="column is-one-quarter">
              <h3 class="title">Quick Links</h3>
              <NuxtLink to="/">Home </NuxtLink>
              <NuxtLink to="/blog"> Blog </NuxtLink>
              <NuxtLink
                v-for="(link, index) in nav"
                :key="index"
                :to="link.link"
                :target="link.target"
                >{{ link.label }}</NuxtLink
              >
            </div>
            <div class="column is-one-third">
              <h3 class="title">Popular Services</h3>
              <NuxtLink
                v-for="(link, index) in nav[0].subMenu"
                :key="index"
                :to="link.link"
                :target="link.target"
                >{{ link.label }}</NuxtLink
              >
            </div>
            <div class="column is-one-third">
              <h3 class="title">Contact Us</h3>
              <a>
                <font-awesome-icon :icon="['fas', 'house']" />
                Dallas, TX
              </a>
              <a href="mailto:info@vadoanalytics.com">
                <font-awesome-icon :icon="['fas', 'envelope']" />
                info@vadoanalytics.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Upper Footer -->
    <!-- Lower Footer -->
    <div id="lower-footer" class="px-3">
      <div class="columns content">
        <div class="column is-full">
          <p class="has-text-white has-text-centered p-4">
            Copyright &copy; {{ currentYear }} Vado Analytics
          </p>
        </div>
      </div>
    </div>
    <!-- /Lower Footer -->
  </footer>
</template>

<script>
import { useNavStore } from "~/stores/navigation";

const navigation = useNavStore();

export default {
  name: "Footer",
  data() {
    return {
      nav: navigation.getNavigation,
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

footer {
  background-color: $vado-blue-1;
}

#upper-footer {
  display: flex;
  justify-content: center;
  font-weight: 500;

  .columns {
    align-items: flex-start;

    .column {
      display: flex;
      flex-basis: auto;
      align-items: center;

      a,
      figure {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 400px;
        }
      }
    }

    #footer-left {
      flex-direction: column;
      justify-content: flex-start;
      width: 400px;
    }

    #footer-right {
      justify-content: flex-end;
      width: calc(100% - 400px);

      .columns {
        width: 100%;

        .column {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;

          a {
            padding: 5px;

            svg {
              margin-right: 6px;
            }
          }
        }
      }
    }
  }
}

#lower-footer {
  display: flex;
  justify-content: center;
  background-color: $vado-blue-3;
  font-weight: 500;
  overflow: hidden;

  .columns {
    justify-content: center;

    .column {
      p {
        font-size: 0.9em;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  #upper-footer {
    .columns {
      #footer-left,
      #footer-right {
        width: 100%;
      }

      #footer-left {
        align-items: flex-start;
      }

      #footer-right {
        padding-left: 0.75rem !important;
      }
    }
  }
}
</style>
