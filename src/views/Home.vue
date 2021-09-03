<template>
  <div class="home">
    <div class="header">
      <h1>GitHub Explorer</h1>
      <img alt="Vue logo" src="../assets/rocket.svg" />
      <div class="input-search-container">
        <input
          class="form-control"
          type="text"
          autocapitalize="off"
          :placeholder="typeSearch === 'users' ? 'Usuário' : 'Repositório'"
          v-model="userName"
          @input="searchGit"
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
        <label for="jack">Usuários</label>
        <input
          @change="clearData"
          type="radio"
          id="repos"
          value="repos"
          v-model="typeSearch"
        />
        <label for="john">Repositórios</label>
        <!-- <input type="radio" id="orgs" value="orgs" v-model="typeSearch" />
        <label for="mike">Organizações</label> -->
      </div>
    </div>
    <div class="body">
      <template v-if="isFetchUserLoading">
        <ClipLoader :loading="true" />
      </template>
      <template v-else-if="!userExist">
        <div class="user-not-found-container">
          <img src="../assets/no-data.svg" alt="" />
          <h2>Nenhum usuário encontrado</h2>
        </div>
      </template>
      <template v-else-if="userExist && !isUserDataEmpty">
        <div class="container user-card-container">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12"
              v-for="user in userData.items"
              :key="user.id"
            >
              <div class="card">
                <img
                  class="card-img-top"
                  :src="user.avatar_url"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ user.login }}</h5>

                  <p class="card-text" v-if="user.bio">
                    {{ user.bio }}
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div>
              </div>
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
        <!-- <div class="user-container">
          <div class="avatar-container">
            <img :src="userData.avatar_url" alt="" />
          </div>
          <div class="language">
            <img
              align="left"
              :src="`https://github-readme-stats.vercel.app/api/top-langs?username=${userData.name}&show_icons=true&locale=en&layout=compact&title_color=fff&icon_color=00d9ff&text_color=c9d1d9&bg_color=161b22&cache_seconds=3000`"
              alt="wendelleloi's github stats"
            />
          </div>
        </div> -->
      </template>
      <template v-else-if="userExist && isUserDataEmpty">
        <div class="user-not-found-container">
          <img src="../assets/search.svg" alt="" />
          <h2>Inicie uma busca</h2>
        </div>
      </template>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    ClipLoader,
  },
  data() {
    return {
      userName: "",
      isFetchUserLoading: false,
      pagination: {
        page: 1,
        pageCount: this.totalCountPaginate,
      },
      userData: {
        items: [],
        total_count: 0,
        incomplete_results: false,
      },
      typeSearch: "users",
    };
  },
  methods: {
    userPaginate(page) {
      this.isFetchUserLoading = true;
      fetch(
        `https://api.github.com/search/users?q=${this.userName}&page=${page}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.isFetchUserLoading = false;
          this.userData = data;
          this.pagination.page = page;
        });
    },
    searchGit(event) {
      const inputData = event.target.value;
      if (inputData.length >= 3) {
        this.isFetchUserLoading = true;
        fetch(`${this.UrlTypeSearch}${inputData}`)
          .then((response) => response.json())
          .then((data) => {
            this.isFetchUserLoading = false;
            this.userData = data;
          });
      }
      if (inputData.length === 0) {
        this.clearData();
      }
    },
    clearData() {
      (this.userName = ""),
        (this.isFetchUserLoading = false),
        (this.userData = []);
    },
  },
  computed: {
    userExist() {
      if (this.userData.message && this.userData.message === "Not Found") {
        return false;
      }
      return true;
    },
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
      // if (this.typeSearch === "repos") {
      //   }
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
