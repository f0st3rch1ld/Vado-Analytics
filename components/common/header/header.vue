<template>
  <div id="upper-header">
    <div class="columns content">
      <div class="column">
        <a href="mailto:info@vadoanalytics.com" class="px-3 py-2">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          info@vadoanalytics.com
        </a>
      </div>
      <div class="column">
        <a
          href="https://www.linkedin.com/company/vado-analytics-com/"
          target="_blank"
          class="px-3 py-2"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCrhINEu5tGklN2u3-cChyMQ"
          target="_blank"
          class="px-3 py-2"
        >
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
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
  background-color: $vado-blue-1;
  min-height: 38px;
  width: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;

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

@media screen and (max-width: 768px) {
  #upper-header {
    .columns {
      display: flex;
    }
  }
}
</style>
