import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", {
  state: () => {
    return {
      navigation: [
        {
          label: "Services",
          link: "/services",
          target: "_self",
          subMenu: [
            {
              label: "Single Location Analysis",
              link: "/services/single-location-analysis",
              target: "_self",
            },
            {
              label: "Multi-Location Analysis",
              link: "/services/multi-location-analysis",
              target: "_self",
            },
            {
              label: "New Location Placement",
              link: "/services/new-location-placement",
              target: "_self",
            },
            {
              label: "Custom Analytics Projects",
              link: "/services/custom-analytics-projects",
              target: "_self",
            },
          ],
        },
        {
          label: "Who We Are",
          link: "/who-we-are",
          target: "_self",
          subMenu: [],
        },
        {
          label: "What We've Done",
          link: "/previous-engagements",
          target: "_self",
          subMenu: [],
        },
        {
          label: "Contact Us",
          link: "/contact-us",
          target: "_self",
          subMenu: [],
        },
      ],
    };
  },
  getters: {
    getNavigation(state) {
      return state.navigation;
    },
  },
});
