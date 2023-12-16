<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/common/header/header";
import Footer from "~/components/common/footer/footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
