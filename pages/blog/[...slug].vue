<template>
  <ContentDoc v-slot="{ doc }">
    <TitleSection>{{ doc.title }}</TitleSection>
    <section class="section pb-0">
      <div class="columns content">
        <div class="column">
          <div class="block">
            <NuxtLink to="/blog" class="button">
              <font-awesome-icon icon="chevron-left" />
              Back
            </NuxtLink>
          </div>
          <hr />
          <div class="block">
            <p class="sub-title post-date">
              <font-awesome-icon icon="clock" />
              <i>{{ doc.postDate }}</i>
              <span>|</span>
              <font-awesome-icon icon="tag" />
              <i>{{ doc.postCategory }}</i>
            </p>
          </div>
        </div>
      </div>
    </section>
  </ContentDoc>
  <section class="section pt-0">
    <div class="columns content is-multiline">
      <div class="column">
        <ContentDoc v-slot="{ doc }">
          <ContentRenderer :value="doc">
            <ContentRendererMarkdown :value="doc" />
          </ContentRenderer>
        </ContentDoc>
      </div>
      <div class="column is-one-third is-relative">
        <div class="most-recent-container">
          <h3 class="title is-size-2">Most Recent Posts:</h3>
          <hr />
          <ContentList path="/blog" v-slot="{ list }">
            <template v-for="(article, index) in list">
              <NuxtLink
                v-if="index < 6"
                :key="index"
                :to="article._path"
                class="preview-tile"
              >
                <p>
                  <strong>
                    {{ article.title }}
                  </strong>
                </p>
              </NuxtLink>
            </template>
          </ContentList>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";

export default {
  components: {
    Content,
    TitleSection,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/vars/colors.scss";

.post-date,
.button {
  svg {
    margin-right: 0.5rem;
  }
}
span {
  margin: 0px 15px;
}
.most-recent-container {
  position: sticky;
  top: 50px;

  .preview-tile {
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $grey-1;
      padding: 10px;
      margin: 10px 0px;
      border-radius: 7px;
    }
  }
}
</style>
