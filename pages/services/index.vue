<template>
  <div>
    <Head>
      <Title>Services | Vado Analytics</Title>
    </Head>
    <TitleSection> Services </TitleSection>
    <ServicesTiles />
  </div>
</template>

<script>
import TitleSection from "~/components/common/page/titleSection";
import ServicesTiles from "~/components/page/services/servicesTiles";

export default {
  name: "Services",
  components: {
    TitleSection,
    ServicesTiles,
  },
};
</script>
