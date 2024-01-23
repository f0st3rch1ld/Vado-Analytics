<template>
  <Content>
    <div class="column is-full">
      <div class="block">
        <h2 class="title is-size-1 has-text-centered">
          <span>BLOG</span><br />
          Recent Posts
        </h2>
      </div>
      <div class="is-flex is-justify-content-center is-align-items-flex-start is-flex-wrap-wrap">
        <ClientOnly>
          <!-- <ContentList path="/blog" v-slot="{ list }">
            <template v-for="(article, index) in list">
              <ArticleTile
                v-if="index < 3"
                :key="index"
                :title="article.title"
                :description="article.description"
                :postDate="article.postDate"
                :postThumb="article.postThumb"
                :postLink="article._path"
                :postCategory="article.postCategory"
              />
            </template>
          </ContentList> -->
        </ClientOnly>
      </div>
    </div>
  </Content>
</template>

<script>
import Content from "~/components/common/content";
import ArticleTile from "~/components/common/blog/articleTile";
export default {
  name: "Recent Posts",
  components: {
    Content,
    ArticleTile,
  },
};
</script>
