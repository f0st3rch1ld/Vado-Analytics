<template>
  <TitleSection>Vado Blog</TitleSection>
  <Content>
    <div class="column is-full">
      <ClientOnly>
        <ContentList path="/blog" v-slot="{ list }">
          <div class="article-tiles-container">
            <ArticleTile
              v-for="article in list"
              :key="article._path"
              :title="article.title"
              :description="article.description"
              :postDate="article.postDate"
              :postThumb="article.postThumb"
              :postLink="article._path"
            />
          </div>
        </ContentList>
      </ClientOnly>
    </div>
  </Content>
</template>

<script>
import Content from "~/components/common/content";
import TitleSection from "~/components/common/page/titleSection";
import ArticleTile from "~/components/common/blog/articleTile";

export default {
  name: "Contact Us",
  components: {
    Content,
    TitleSection,
    ArticleTile,
  },
};
</script>

<style lang="scss">
.article-tiles-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
