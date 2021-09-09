<template>
  <div class="home">
    <div class="header">
      <h1>GitHub Explorer</h1>
      <img alt="GitHub Explorer logo" src="../assets/rocket.svg" />
      <div class="input-search-container">
        <input
          class="form-control"
          type="text"
          autocapitalize="off"
          :placeholder="typeSearch === 'users' ? 'Usuário' : 'Repositório'"
          v-model="userName"
          @keyup="searchGit"
        />
      </div>
      <div>
        <input
          @change="clearData"
          type="radio"
          id="users"
          value="users"
          v-model="typeSearch"
        />
        <label style="margin: 0 20px 0 5px" for="users">Usuários</label>
        <input
          @change="clearData"
          type="radio"
          id="repos"
          value="repositories"
          v-model="typeSearch"
        />
        <label style="margin: 0 0 0 5px" for="repos">Repositórios</label>
      </div>
    </div>
    <div class="body">
      <template v-if="isFetchUserLoading">
        <ClipLoader :loading="true" />
      </template>
      <template v-else-if="userData.total_count === 0">
        <div class="user-not-found-container">
          <img src="../assets/no-data.svg" alt="Nenhum resultado encontrado" />
          <h2>
            Nenhum
            {{ typeSearch === "users" ? "usuário" : "repositório" }} encontrado
          </h2>
        </div>
      </template>
      <template v-else-if="userData.message">
        <div class="user-not-found-container">
          <img src="../assets/cancel.svg" alt="Limite de buscas atingido" />
          <h2>Limite de buscas foi atingido. Tente novamente mais tarde</h2>
        </div>
      </template>
      <template v-else-if="!isUserDataEmpty">
        <div class="container user-card-container">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12"
              v-for="user in userData.items"
              :key="user.id"
            >
              <template v-if="typeSearch === 'users'">
                <UserList
                  :user="user"
                  :followersData="followersData"
                  :orgsData="orgsData"
                  :repositoriesData="repositoriesData"
                  :subscriptionsData="subscriptionsData"
                  @handleFlowers="handleFlowers"
                  @handleSubscription="handleSubscription"
                  @handleOrgs="handleOrgs"
                  @handleRepositories="handleRepositories"
                />
              </template>
              <template v-else>
                <RepoList
                  :user="user"
                  :contributorsData="contributorsData"
                  :subscriptionsData="subscriptionsRepoData"
                  :tagsData="tagsData"
                  @handleSubscribers="handleSubscribers"
                  @handleContributors="handleContributors"
                  @handleTags="handleTags"
                />
              </template>
            </div>
          </div>
          <paginate
            v-model="pagination.page"
            v-if="userData.items.length > 0"
            :page-count="totalCountPaginate"
            :page-range="3"
            :margin-pages="2"
            :click-handler="userPaginate"
            :prev-text="'Anterior'"
            :next-text="'Próximo'"
            :container-class="'pagination'"
            active-class="myActivePaginateButton"
            :page-class="'page-item'"
          >
          </paginate>
        </div>
      </template>
      <template v-else-if="isUserDataEmpty">
        <div class="user-not-found-container">
          <img src="../assets/search.svg" alt="Inicie uma busca" />
          <h2>Inicie uma busca</h2>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
import UserList from "../components/UserList.vue";
import RepoList from "../components/RepoList.vue";

export default {
  name: "Home",
  components: {
    ClipLoader,
    UserList,
    RepoList,
  },
  data() {
    return {
      userName: "",
      isFetchUserLoading: false,
      followersData: {
        followers: [],
        isLoading: false,
      },
      subscriptionsData: {
        subscriptions: [],
        isLoading: false,
      },
      orgsData: {
        orgs: [],
        isLoading: false,
      },
      repositoriesData: {
        repos: [],
        isLoading: false,
      },
      contributorsData: {
        contributors: [],
        isLoading: false,
      },
      subscriptionsRepoData: {
        subscriptions: [],
        isLoading: false,
      },
      tagsData: {
        tags: [],
        isLoading: false,
      },
      ownerData: {
        owners: [],
        isLoading: false,
      },
      pagination: {
        page: 1,
        pageCount: this.totalCountPaginate,
      },
      userData: {},
      typeSearch: "users",
      timer: false,
    };
  },
  methods: {
    async userPaginate(page) {
      this.isFetchUserLoading = true;
      let header = {};
      let authToken = "";
      const isAuthLogged = await this.$auth.isAuthenticated;
      if (isAuthLogged) {
        authToken = await this.$auth.getTokenSilently();
      }

      if (authToken) {
        header = {
          headers: {
            Authorization: "token" + authToken,
          },
        };
      }
      fetch(
        `https://api.github.com/search/${this.typeSearch}?q=${this.userName}&page=${page}`,
        header
      )
        .then((response) => response.json())
        .then((data) => {
          this.isFetchUserLoading = false;
          this.pagination.page = page;
          this.userData = data;
        });
    },
    async searchGit(event) {
      let header = {};
      let authToken = "";
      const isAuthLogged = await this.$auth.isAuthenticated;
      if (isAuthLogged) {
        authToken = await this.$auth.getTokenSilently();
      }

      if (authToken) {
        header = {
          headers: {
            Authorization: "token" + authToken,
          },
        };
      }

      const inputData = event.target.value;
      if (inputData.length >= 3) {
        this.isFetchUserLoading = true;
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(() => {
          fetch(`${this.UrlTypeSearch}${inputData}`, header)
            .then((response) => response.json())
            .then((data) => {
              this.isFetchUserLoading = false;
              this.userData = data;
              this.pagination.page = 1;
            });
        }, 800);
      }
      if (inputData.length === 0) {
        this.clearData();
      }
    },
    clearData() {
      (this.userName = ""),
        (this.isFetchUserLoading = false),
        (this.userData = []);
      this.pagination = {
        page: 1,
        pageCount: 0,
      };
    },
    handleFlowers(followers) {
      this.followersData.isLoading = true;
      fetch(`${followers}`)
        .then((response) => response.json())
        .then((data) => {
          this.followersData.isLoading = false;
          this.followersData.followers = data;
        });
    },
    handleSubscription(subscription) {
      this.subscriptionsData.isLoading = true;
      fetch(`${subscription}`)
        .then((response) => response.json())
        .then((data) => {
          this.subscriptionsData.isLoading = false;
          this.subscriptionsData.subscriptions = data;
        });
    },
    handleOrgs(org) {
      this.orgsData.isLoading = true;
      fetch(`${org}`)
        .then((response) => response.json())
        .then((data) => {
          this.orgsData.isLoading = false;
          this.orgsData.orgs = data;
        });
    },
    handleRepositories(repo) {
      this.repositoriesData.isLoading = true;
      fetch(`${repo}`)
        .then((response) => response.json())
        .then((data) => {
          this.repositoriesData.isLoading = false;
          this.repositoriesData.repos = data;
        });
    },
    handleContributors(contributors) {
      this.contributorsData.isLoading = true;
      fetch(`${contributors}`)
        .then((response) => response.json())
        .then((data) => {
          this.contributorsData.isLoading = false;
          this.contributorsData.contributors = data;
        });
    },
    handleSubscribers(subscriptions) {
      this.subscriptionsRepoData.isLoading = true;
      fetch(`${subscriptions}`)
        .then((response) => response.json())
        .then((data) => {
          this.subscriptionsRepoData.isLoading = false;
          this.subscriptionsRepoData.subscriptions = data;
        });
    },
    handleTags(tag) {
      this.tagsData.isLoading = true;
      fetch(`${tag}`)
        .then((response) => response.json())
        .then((data) => {
          this.tagsData.isLoading = false;
          this.tagsData.tags = data;
        });
    },
  },
  computed: {
    isUserDataEmpty() {
      if (Object.entries(this.userData).length === 0) return true;
      return false;
    },
    totalCountPaginate() {
      const totalCount = Math.round(this.userData.total_count / 30);
      if (totalCount > 0) return totalCount;
      return 0;
    },
    UrlTypeSearch() {
      if (this.typeSearch === "users") {
        return "https://api.github.com/search/users?q=";
      }
      return "https://api.github.com/search/repositories?q=";
    },
  },
};
</script>

<style lang="scss">
.home {
  .header {
    width: 100%;
    background-color: #42b983;
    padding: 50px 0;
    img {
      width: 20%;
    }
    .input-search-container {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      width: 50%;
      margin: 20px auto;
    }
  }
  .body {
    max-width: 1220px;
    margin: 0 auto;
    .user-card-container {
      padding: 20px;
      .card {
        margin-bottom: 50px;
      }
    }
    .user-container {
      margin: 20px 0;
      background-color: var(--color-bg-primary);
      border: 1px solid var(--color-border-primary);
      border-radius: 6px;
      .avatar-container {
        img {
          border-radius: 50%;
          width: 10%;
        }
      }
    }
    .user-not-found-container {
      margin: 20px 0;
      img {
        width: 20%;
      }
    }
  }
  .pagination {
    li {
      & + li {
        margin-left: 10px;
      }
      a {
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        border: 1px solid #ddd;
        background-color: white;
      }
    }
  }

  .pagination a:hover:not(.active) {
    background-color: gray;
  }

  .pagination a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .pagination a:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .myActivePaginateButton {
    a {
      background-color: var(--color-green-primary) !important;
    }
  }
}
</style>
