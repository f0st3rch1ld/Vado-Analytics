<template>
  <div class="column is-full">
    <div class="select mb-3 mx-1">
      <select v-model="sortBy">
        <option value="dateDesc">Sort-By: Date - Descending</option>
        <option value="dateAsc">Sort-By: Date - Ascending</option>
      </select>
    </div>
    <div class="select mb-3 mx-1">
      <select v-model="postCategories">
        <option value="all">All</option>
        <option
          v-for="(category, index) in categoriesFiltered"
          :key="index"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
    <nav
      v-if="totalPages > 1"
      class="pagination is-right"
      role="navigation"
      aria-label="pagination"
    >
      <a class="pagination-previous" @click="prevPage()">Previous</a>
      <a class="pagination-next" @click="nextPage()">Next page</a>
      <ul class="pagination-list">
        <template v-if="activePage < 5">
          <template v-if="totalPages > 6">
            <li v-for="page in 6">
              <a :class="paginationLinkClasses(page)" @click="goToPage(page)">{{
                page
              }}</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a
                :class="paginationLinkClasses(totalPages)"
                @click="goToPage(totalPages)"
              >
                {{ totalPages }}
              </a>
            </li>
          </template>
          <template v-else>
            <li v-for="page in totalPages">
              <a :class="paginationLinkClasses(page)" @click="goToPage(page)">{{
                page
              }}</a>
            </li>
          </template>
        </template>
        <template v-else-if="activePage + 5 > totalPages && totalPages > 6">
          <li>
            <a :class="paginationLinkClasses(1)" @click="goToPage(1)">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-for="page in 6">
            <a
              :class="paginationLinkClasses(totalPages - 6 + page)"
              @click="goToPage(totalPages - 6 + page)"
              >{{ totalPages - 6 + page }}</a
            >
          </li>
        </template>
        <template v-else>
          <li>
            <a :class="paginationLinkClasses(1)" @click="goToPage(1)">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" @click="goToPage(activePage - 1)">
              {{ activePage - 1 }}
            </a>
          </li>
          <li>
            <a :class="paginationLinkClasses(activePage)">{{ activePage }}</a>
          </li>
          <li>
            <a class="pagination-link" @click="goToPage(activePage + 1)">
              {{ activePage + 1 }}
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              :class="paginationLinkClasses(totalPages)"
              @click="goToPage(totalPages)"
              >{{ totalPages }}</a
            >
          </li>
        </template>
      </ul>
    </nav>
    <div class="pagination-container">
      <ArticleTile
        v-for="article in currentPage"
        :key="article._path"
        :title="article.title"
        :description="article.description"
        :postDate="article.postDate"
        :postThumb="article.postThumb"
        :postLink="article._path"
        :postCategory="article.postCategory"
      />
    </div>
    <nav
      v-if="totalPages > 1"
      class="pagination is-right"
      role="navigation"
      aria-label="pagination"
    >
      <a class="pagination-previous" @click="prevPage()">Previous</a>
      <a class="pagination-next" @click="nextPage()">Next page</a>
      <ul class="pagination-list">
        <template v-if="activePage < 5">
          <template v-if="totalPages > 6">
            <li v-for="page in 6">
              <a :class="paginationLinkClasses(page)" @click="goToPage(page)">{{
                page
              }}</a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a
                :class="paginationLinkClasses(totalPages)"
                @click="goToPage(totalPages)"
              >
                {{ totalPages }}
              </a>
            </li>
          </template>
          <template v-else>
            <li v-for="page in totalPages">
              <a :class="paginationLinkClasses(page)" @click="goToPage(page)">{{
                page
              }}</a>
            </li>
          </template>
        </template>
        <template v-else-if="activePage + 5 > totalPages && totalPages > 6">
          <li>
            <a :class="paginationLinkClasses(1)" @click="goToPage(1)">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li v-for="page in 6">
            <a
              :class="paginationLinkClasses(totalPages - 6 + page)"
              @click="goToPage(totalPages - 6 + page)"
              >{{ totalPages - 6 + page }}</a
            >
          </li>
        </template>
        <template v-else>
          <li>
            <a :class="paginationLinkClasses(1)" @click="goToPage(1)">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" @click="goToPage(activePage - 1)">
              {{ activePage - 1 }}
            </a>
          </li>
          <li>
            <a :class="paginationLinkClasses(activePage)">{{ activePage }}</a>
          </li>
          <li>
            <a class="pagination-link" @click="goToPage(activePage + 1)">
              {{ activePage + 1 }}
            </a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a
              :class="paginationLinkClasses(totalPages)"
              @click="goToPage(totalPages)"
              >{{ totalPages }}</a
            >
          </li>
        </template>
      </ul>
    </nav>
  </div>
</template>

<script>
import ArticleTile from "~/components/common/blog/articleTile";

export default {
  name: "Pagination",
  components: {
    ArticleTile,
  },
  props: {
    data: {
      type: Array,
      default(rawProps) {
        return [];
      },
    },
  },
  data() {
    return {
      itemsPerPage: 9,
      activePage: 1,
      sortBy: "dateDesc",
      postCategories: "all",
    };
  },
  computed: {
    dataFiltered() {
      return this.dataSorted.filter((data) => {
        return (
          this.postCategories === "all" ||
          this.postCategories === data.postCategory
        );
      });
    },
    dataSorted() {
      switch (this.sortBy) {
        case "dateAsc":
          return this.data.sort((a, b) => {
            let firstDate = new Date(a.postDate);
            let secondDate = new Date(b.postDate);
            if (firstDate < secondDate) {
              return -1;
            }
            if (firstDate > secondDate) {
              return 1;
            }
            return 0;
          });
          break;
        case "dateDesc":
          return this.data.sort((a, b) => {
            let firstDate = new Date(a.postDate);
            let secondDate = new Date(b.postDate);
            if (firstDate > secondDate) {
              return -1;
            }
            if (firstDate < secondDate) {
              return 1;
            }
            return 0;
          });
          break;
        default:
          return this.data.sort((a, b) => {
            let firstDate = new Date(a.postDate);
            let secondDate = new Date(b.postDate);
            if (firstDate > secondDate) {
              return -1;
            }
            if (firstDate < secondDate) {
              return 1;
            }
            return 0;
          });
      }
    },
    categoriesFiltered() {
      let postCategories = [];
      this.dataSorted.forEach((post) => {
        postCategories.push(post.postCategory);
      });
      let unique = [...new Set(postCategories)];
      return unique;
    },
    currentPage() {
      const sliceStart = (this.activePage - 1) * this.itemsPerPage;
      const sliceEnd = sliceStart + this.itemsPerPage;
      return this.dataFiltered.slice(sliceStart, sliceEnd);
    },
    totalPages() {
      return Math.ceil(this.dataFiltered.length / this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.activePage < this.totalPages) {
        this.activePage++;
      }
    },
    prevPage() {
      if (this.activePage > 1) {
        this.activePage--;
      }
    },
    goToPage(page) {
      this.activePage = page;
    },
    paginationLinkClasses(page) {
      return {
        "pagination-link": true,
        "is-current": this.activePage === page,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

ul {
  margin-top: 0 !important;
}
</style>
