import UserList from "../components/UserList.vue";

export default {
  title: "components/UserList",
  component: UserList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UserList },
  template:
    '<UserList @handleFlowers="handleFlowers" @handleSubscription="handleSubscription" @handleOrgs="handleOrgs" @handleRepositories="handleRepositories"v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    avatar_url: "https://avatars.githubusercontent.com/u/116438?v=4",
    events_url: "https://api.github.com/users/wenda/events{/privacy}",
    followers_url: "https://api.github.com/users/wenda/followers",
    following_url: "https://api.github.com/users/wenda/following{/other_user}",
    gists_url: "https://api.github.com/users/wenda/gists{/gist_id}",
    gravatar_id: "",
    html_url: "https://github.com/wenda",
    id: 116438,
    login: "wenda",
    node_id: "MDQ6VXNlcjExNjQzOA==",
    organizations_url: "https://api.github.com/users/wenda/orgs",
    received_events_url: "https://api.github.com/users/wenda/received_events",
    repos_url: "https://api.github.com/users/wenda/repos",
    score: 1,
    site_admin: false,
    starred_url: "https://api.github.com/users/wenda/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wenda/subscriptions",
    type: "User",
    url: "https://api.github.com/users/wenda",
    total_count: 642,
  },
  followersData: {
    followers: [
      {
        login: "stepan",
        id: 11852,
        node_id: "MDQ6VXNlcjExODUy",
        avatar_url: "https://avatars.githubusercontent.com/u/11852?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/stepan",
        html_url: "https://github.com/stepan",
        followers_url: "https://api.github.com/users/stepan/followers",
        following_url:
          "https://api.github.com/users/stepan/following{/other_user}",
        gists_url: "https://api.github.com/users/stepan/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/stepan/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/stepan/subscriptions",
        organizations_url: "https://api.github.com/users/stepan/orgs",
        repos_url: "https://api.github.com/users/stepan/repos",
        events_url: "https://api.github.com/users/stepan/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/stepan/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "ahmetabdi",
        id: 778015,
        node_id: "MDQ6VXNlcjc3ODAxNQ==",
        avatar_url: "https://avatars.githubusercontent.com/u/778015?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/ahmetabdi",
        html_url: "https://github.com/ahmetabdi",
        followers_url: "https://api.github.com/users/ahmetabdi/followers",
        following_url:
          "https://api.github.com/users/ahmetabdi/following{/other_user}",
        gists_url: "https://api.github.com/users/ahmetabdi/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/ahmetabdi/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/ahmetabdi/subscriptions",
        organizations_url: "https://api.github.com/users/ahmetabdi/orgs",
        repos_url: "https://api.github.com/users/ahmetabdi/repos",
        events_url: "https://api.github.com/users/ahmetabdi/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/ahmetabdi/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "KevinHock",
        id: 3076393,
        node_id: "MDQ6VXNlcjMwNzYzOTM=",
        avatar_url: "https://avatars.githubusercontent.com/u/3076393?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/KevinHock",
        html_url: "https://github.com/KevinHock",
        followers_url: "https://api.github.com/users/KevinHock/followers",
        following_url:
          "https://api.github.com/users/KevinHock/following{/other_user}",
        gists_url: "https://api.github.com/users/KevinHock/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/KevinHock/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/KevinHock/subscriptions",
        organizations_url: "https://api.github.com/users/KevinHock/orgs",
        repos_url: "https://api.github.com/users/KevinHock/repos",
        events_url: "https://api.github.com/users/KevinHock/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/KevinHock/received_events",
        type: "User",
        site_admin: false,
      },
      {
        login: "Dmitriy-Vas",
        id: 48634525,
        node_id: "MDQ6VXNlcjQ4NjM0NTI1",
        avatar_url: "https://avatars.githubusercontent.com/u/48634525?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/Dmitriy-Vas",
        html_url: "https://github.com/Dmitriy-Vas",
        followers_url: "https://api.github.com/users/Dmitriy-Vas/followers",
        following_url:
          "https://api.github.com/users/Dmitriy-Vas/following{/other_user}",
        gists_url: "https://api.github.com/users/Dmitriy-Vas/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/Dmitriy-Vas/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/Dmitriy-Vas/subscriptions",
        organizations_url: "https://api.github.com/users/Dmitriy-Vas/orgs",
        repos_url: "https://api.github.com/users/Dmitriy-Vas/repos",
        events_url: "https://api.github.com/users/Dmitriy-Vas/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/Dmitriy-Vas/received_events",
        type: "User",
        site_admin: false,
      },
    ],
    isLoading: false,
  },
  subscriptionsData: {
    subscriptions: [],
    isLoading: true,
  },
  orgsData: {
    orgs: [],
    isLoading: false,
  },
  repositoriesData: {
    repos: [],
    isLoading: false,
  },
};
