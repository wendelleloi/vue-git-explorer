<template>
  <div class="about">
    <div class="container-xl px-3 px-md-4 px-lg-5">
      <div
        class="row gutter-condensed gutter-lg flex-column flex-md-row d-flex"
      >
        <div class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">
          <template v-if="isFetchUserLoading">
            <ClipLoader />
          </template>
          <template v-else>
            <div class="avatar-container">
              <img
                :src="userData.avatar_url"
                alt="Avatar image"
                srcset="Avatar image"
              />
            </div>
            <div class="description-container">
              <h1>
                <span class="login-name">
                  {{ userData.login }}
                </span>
                <span class="user-name">
                  {{ userData.name }}
                </span>
              </h1>
            </div>
            <div class="details-container d-flex flex-column">
              <div class="profile d-flex flex-column d-md-block mb-3">
                <div class="bio" v-if="userData.bio">
                  <p>
                    {{ userData.bio }}
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row d-md-block mb-3">
                <div class="bio" v-if="userData.bio">
                  <span>
                    Criado em: {{ formatDate(userData.created_at) }}
                  </span>
                  <span>
                    Atualizado às: {{ formatDate(userData.updated_at) }}
                  </span>
                </div>
              </div>
              <div class="flex-order-1 flex-md-order-none mt-2 mt-md-0">
                <div class="mb-3 conter">
                  <a class="Link--secondary" href="#">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      class="octicon octicon-people"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"
                      ></path>
                    </svg>
                    <span class="text-bold color-text-primary"
                      >{{ userData.followers }}
                    </span>
                    Seguidores
                  </a>
                  ·
                  <a class="Link--secondary" href="#">
                    <span class="text-bold color-text-primary">{{
                      userData.following
                    }}</span>
                    Seguindo
                  </a>
                </div>
              </div>
              <ul class="vcard-details">
                <li
                  v-if="userData.company"
                  class="pt-1 css-truncate css-truncate-target hide-sm hide-md"
                  itemprop="worksFor"
                  show_title="false"
                >
                  <svg
                    class="octicon octicon-organization"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"
                    ></path>
                  </svg>
                  <span class="p-org"
                    ><div>{{ userData.company }}</div></span
                  >
                </li>
                <li
                  class="pt-1 css-truncate css-truncate-target hide-sm hide-md"
                  itemprop="homeLocation"
                  show_title="false"
                  v-if="userData.location"
                >
                  <svg
                    class="octicon octicon-location"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                    ></path>
                  </svg>
                  <span class="p-label">{{ userData.location }}</span>
                </li>

                <li
                  itemprop="url"
                  data-test-selector="profile-website-url"
                  class="pt-1 css-truncate css-truncate-target"
                  v-if="userData.blog"
                >
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-link"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
                    ></path>
                  </svg>
                  <a
                    rel="nofollow me"
                    class="Link--primary"
                    :href="userData.blog"
                    >{{ userData.blog }}</a
                  >
                </li>
              </ul>
            </div>
          </template>
        </div>
        <div class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
          <template v-if="isFetchUserLoading">
            <ClipLoader />
          </template>
          <template v-else>
            <div class="make-column">
              <div class="grafic-container">
                <img
                  align="left"
                  :src="`https://github-readme-stats.vercel.app/api/top-langs?username=${$route.params.userName}&show_icons=true&locale=en&title_color=fff&icon_color=00d9ff&text_color=c9d1d9&bg_color=161b22`"
                  :alt="`${$route.params.userName}'s github stats`"
                />
              </div>

              <div class="grafic-container">
                <img
                  align="left"
                  :src="`https://github-readme-stats.vercel.app/api/wakatime?username=${$route.params.userName}`"
                  :alt="`${$route.params.userName}'s github stats`"
                />
              </div>

              <div class="grafic-container">
                <img
                  align="left"
                  :src="`https://github-readme-stats.vercel.app/api?username=${$route.params.userName}&show_icons=true&theme=radical`"
                  :alt="`${$route.params.userName}'s github stats`"
                />
              </div>

              <div class="grafic-container">
                <img
                  style="max-width: 700px"
                  align="left"
                  :src="`https://activity-graph.herokuapp.com/graph?username=${$route.params.userName}&theme=github`"
                  :alt="`${$route.params.userName}'s github stats`"
                />
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  name: "userDetails",
  components: {
    ClipLoader,
  },
  data() {
    return {
      isFetchUserLoading: true,
      userData: {},
      repositories: {
        data: [],
        isLoading: true,
      },
    };
  },
  methods: {
    formatDate(dateParams) {
      const date = new Date(dateParams);
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      let dt = date.getDate();

      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }
      return dt + " / " + month + " / " + year;
    },
    async handleRepositories(link) {
      this.repositories.isLoading = true;
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
      fetch(`${link}?per_page=100&page=1`, header)
        .then((response) => response.json())
        .then((data) => {
          this.repositories.isLoading = false;
          this.repositories.data = data;
        });
    },
  },
  async created() {
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
    fetch(`https://api.github.com/users/${this.$route.params.userName}`, header)
      .then((response) => response.json())
      .then((data) => {
        this.isFetchUserLoading = false;
        this.userData = data;
      });
  },
};
</script>

<style lang="scss">
.about {
  color: var(--color-text-primary);
  background-color: var(--color-bg-canvas);
  min-height: calc(100% - 54px);
  .description-container {
    .login-name {
      font-size: 26px;
      line-height: 1.25;
      display: block;
    }
    .user-name {
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 24px;
      color: var(--color-text-secondary);
    }
  }
  .details-container {
    .conter {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .Link--secondary {
      color: var(--color-text-secondary) !important;
      display: inline-flex;
      align-items: center;
      text-decoration: none;
      svg {
        margin-right: 5px;
      }
    }
    .octicon {
      display: inline-block;
      overflow: visible !important;
      vertical-align: text-bottom;
      fill: currentColor;
    }
    .vcard-details {
      list-style: none;
      li {
        display: flex;
        svg {
          margin-right: 5px;
        }
        a {
          color: var(--color-text-secondary) !important;
          text-decoration: none;
        }
      }
    }
  }
  .avatar-container {
    margin-top: 50px;
    img {
      border-radius: 50%;
      width: 80%;
      box-shadow: 0 0 0 1px var(--color-avatar-border);
      border: 1px solid var(--color-border-primary) !important;
    }
  }
}

.make-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  div {
    margin: 0 auto;
  }
}
.grafic-container img {
  margin-bottom: 50px;
}

@media only screen and (max-width: 768px) {
  .grafic-container img {
    width: 100%;
  }
}
</style>
