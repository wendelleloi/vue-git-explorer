<template>
  <div class="card">
    <img class="card-img-top" :src="user.avatar_url" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">{{ user.login }}</h5>

      <p class="card-text" v-if="user.bio">
        {{ user.bio }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <!-- @click="handleFlowers(user.followers_url)" -->
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-${user.id}`]
            @click="$emit('handleFlowers', user.followers_url)"
          >
            Seguidores
          </b-card-header>
          <b-collapse
            :id="`collapse-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="followersData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="
                !followersData.isLoading && followersData.followers.length === 0
              "
            >
              <b-card-text> Nenhum seguidor encontrado </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text
                v-for="follower in followersData.followers"
                :key="follower.id"
              >
                <a
                  :href="follower.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ follower.login }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <!-- @click="handleSubscription(user.subscriptions_url)" -->
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-subscription-${user.id}`]
            @click="$emit('handleSubscription', user.subscriptions_url)"
          >
            Inscrições
          </b-card-header>
          <b-collapse
            :id="`collapse-subscription-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="subscriptionsData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="
                !subscriptionsData.isLoading &&
                subscriptionsData.subscriptions.length === 0
              "
            >
              <b-card-text> Nenhuma inscrição encontrada </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text
                v-for="subscription in subscriptionsData.subscriptions"
                :key="subscription.id"
              >
                <a
                  :href="subscription.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ subscription.name }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <!-- @click="handleOrgs(user.organizations_url)" -->
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-organizations-${user.id}`]
            @click="$emit('handleOrgs', user.organizations_url)"
          >
            organizações
          </b-card-header>
          <b-collapse
            :id="`collapse-organizations-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="orgsData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="!orgsData.isLoading && orgsData.orgs.length === 0"
            >
              <b-card-text> Nenhuma organização encontrada </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text
                v-for="subscription in orgsData.orgs"
                :key="subscription.id"
              >
                <a
                  :href="`https://github.com/${subscription.login}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ subscription.login }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <!-- @click="handleRepositories(user.repos_url)" -->
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-repositories-${user.id}`]
            @click="$emit('handleRepositories', user.repos_url)"
          >
            Repositórios
          </b-card-header>
          <b-collapse
            :id="`collapse-repositories-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="repositoriesData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="
                !repositoriesData.isLoading &&
                repositoriesData.repos.length === 0
              "
            >
              <b-card-text> Nenhum repositório encontrado </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text
                v-for="repo in repositoriesData.repos"
                :key="repo.id"
              >
                <a
                  :href="`${repo.html_url}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ repo.name }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
    </ul>
    <div class="card-body">
      <router-link
        :to="{ name: 'userDetail', params: { userName: user.login } }"
        >Ir para detalhes</router-link
      >
    </div>
  </div>
</template>

<script>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  name: "UserList",
  components: {
    ClipLoader,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    followersData: {
      type: Object,
      required: true,
    },
    subscriptionsData: {
      type: Object,
      required: true,
    },
    orgsData: {
      type: Object,
      required: true,
    },
    repositoriesData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
