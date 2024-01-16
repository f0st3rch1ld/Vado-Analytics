<template>
  <section class="section" id="operations-container">
    <div class="columns content is-vcentered">
      <div class="column is-two-fifths">
        <div class="block">
          <h2 class="title is-size-1">
            <span>OPERATIONS</span><br />
            Focused on Actionable Insights
          </h2>
        </div>
        <div class="block">
          <p>
            We will work with you to develop an actionable plan to grow your
            business.
          </p>
        </div>
        <div class="block">
          <ul>
            <li>
              <ClientOnly><font-awesome-icon icon="circle-check" /></ClientOnly
              >&nbsp;Realize who your customers are.
            </li>
            <li>
              <ClientOnly><font-awesome-icon icon="circle-check" /></ClientOnly
              >&nbsp;Understand what they are interested in.
            </li>
            <li>
              <ClientOnly><font-awesome-icon icon="circle-check" /></ClientOnly
              >&nbsp;Know the best way to communicate with them.
            </li>
          </ul>
        </div>
      </div>
      <div class="column" id="operations-images">
        <figure class="image" id="image-1">
          <img
            src="~/assets/images/webp/Focused-on-Actionable-Insights-1.webp"
          />
        </figure>
        <figure class="image" id="image-2">
          <img
            src="~/assets/images/webp/Focused-on-Actionable-Insights-2.webp"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Operations",
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

#operations-container {
  ul {
    list-style-type: none;
    li {
      font-weight: 700;
      margin-top: 1em;
      margin-bottom: 1em;

      svg {
        color: $vado-green-2;
        margin-right: 0.5em;
      }
    }
  }

  #operations-images {
    position: relative;
    min-height: 450px;
    figure {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
      position: absolute;

      img {
        max-width: 500px;
      }

      &#image-1 {
        top: 0;
        left: 0;
      }

      &#image-2 {
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
