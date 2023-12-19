<template>
  <div>
    <Header />
    <ClientOnly>
      <TitleSection>{{ pageTitle }}</TitleSection>
    </ClientOnly>

    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/common/header/header";
import Footer from "~/components/common/footer/footer";
import TitleSection from "~/components/common/page/titleSection";

export default {
  components: {
    Header,
    Footer,
    TitleSection,
  },
  computed: {
    pageTitle() {
      // one off replacements
      const replacements = {
        "index": "home",
        "services-": "",
        "previous-engagements": "What We've Done",
      };
      let words = this.$route.name;
      Object.keys(replacements).forEach((replacement) => {
        words = words.replace(replacement, replacements[replacement]);
      });
      // format title
      const wordsSplit = words.replace(/-+/gi, " ").split(" ");
      for (let i = 0; i < wordsSplit.length; i++) {
        wordsSplit[i] =
          wordsSplit[i][0].toUpperCase() + wordsSplit[i].substr(1);
      }
      return wordsSplit.join(" ");
    },
  },
};
</script>
