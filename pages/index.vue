<template>
  <div>
    <Head>
      <Title>Home | Vado Analytics</Title>
    </Head>
    <Splash />
    <WhoWeAre />
    <WhyUs />
    <ExploreOurServices />
    <Operations />
    <TransformYourBusiness />
    <!-- <RecentPosts /> -->
  </div>
</template>

<script>
import Splash from "~/components/page/home/splash";
import WhoWeAre from "~/components/page/home/whoWeAre";
import WhyUs from "~/components/page/home/whyUs";
import ExploreOurServices from "~/components/page/home/exploreOurServices";
import Operations from "~/components/page/home/operations";
import TransformYourBusiness from "~/components/page/home/transformYourBusiness";
// import RecentPosts from "~/components/common/blog/recentPosts";

export default {
  name: "Home",
  components: {
    Splash,
    WhoWeAre,
    WhyUs,
    Operations,
    ExploreOurServices,
    TransformYourBusiness,
    // RecentPosts,
  },
};
</script>
