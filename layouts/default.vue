<template>
  <div>
    <Header />
    <ClientOnly>
      <TitleSection>{{ $route.name }}</TitleSection>
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
  }
};
</script>
