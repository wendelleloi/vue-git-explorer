<template>
  <div class="card">
    <!-- <img class="card-img-top" :src="user.avatar_url" alt="Card image cap" /> -->
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>

      <p class="card-text" v-if="user.description">
        {{ user.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <b-card-text> Curtidas: {{ user.stargazers_count }} </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card-text> Observadores: {{ user.watchers_count }} </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card-text> Forks: {{ user.forks_count }} </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card-text>
          Issues abertas: {{ user.open_issues_count }}
        </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card-text>
          Criado em: {{ formatDate(user.created_at) }}
        </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card-text>
          Atualizado às: {{ formatDate(user.updated_at) }}
        </b-card-text>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-contributors-${user.id}`]
            @click="$emit('handleContributors', user.contributors_url)"
          >
            contribuintes
          </b-card-header>
          <b-collapse
            :id="`collapse-contributors-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="contributorsData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="
                !contributorsData.isLoading &&
                contributorsData.contributors.length === 0
              "
            >
              <b-card-text> Nenhum contribuinte encontrado </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text
                v-for="contributor in contributorsData.contributors"
                :key="contributor.id"
              >
                <a
                  :href="contributor.html_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ contributor.login }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-subscribers-${user.id}`]
            @click="$emit('handleSubscribers', user.subscribers_url)"
          >
            Assinantes
          </b-card-header>
          <b-collapse
            :id="`collapse-subscribers-${user.id}`"
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
                  >{{ subscription.login }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-tags-${user.id}`]
            @click="$emit('handleTags', user.tags_url)"
          >
            Tags
          </b-card-header>
          <b-collapse
            :id="`collapse-tags-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="tagsData.isLoading">
              <ClipLoader :loading="true" />
            </template>
            <template
              v-else-if="!tagsData.isLoading && tagsData.tags.length === 0"
            >
              <b-card-text> Nenhuma tag encontrada </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text v-for="tag in tagsData.tags" :key="tag.id">
                <a
                  :href="`${tag.zipball_url}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ tag.name }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
      <li class="list-group-item">
        <b-card no-body class="mb-1">
          <b-card-header
            header-tag="header"
            class="p-1"
            role="tab"
            v-b-toggle:[`collapse-owner-${user.id}`]
          >
            Proprietário
          </b-card-header>
          <b-collapse
            :id="`collapse-owner-${user.id}`"
            accordion="my-accordion"
            role="tabpanel"
          >
            <template v-if="!user.owner">
              <b-card-text> Proprietário não encontrado </b-card-text>
            </template>
            <b-card-body v-else>
              <b-card-text>
                <a
                  :href="`${user.owner.html_url}`"
                  target="_blank"
                  rel="noopener noreferrer"
                  >{{ user.owner.login }}</a
                >
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </li>
    </ul>
  </div>
</template>

<script>
import ClipLoader from "vue-spinner/src/ClipLoader.vue";
export default {
  name: "RepoList",
  components: {
    ClipLoader,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    contributorsData: {
      type: Object,
      required: true,
    },
    subscriptionsData: {
      type: Object,
      required: true,
    },
    tagsData: {
      type: Object,
      required: true,
    },
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
  },
};
</script>

<style lang="scss"></style>
