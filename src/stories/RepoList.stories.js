import RepoList from "../components/RepoList.vue";

export default {
  title: "components/RepoList",
  component: RepoList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { RepoList },
  template:
    '<RepoList @handleSubscribers="handleSubscribers" @handleContributors="handleContributors" @handleTags="handleTags" v-bind="$props"/>',
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    id: 1449773,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDQ5Nzcz",
    name: "red",
    full_name: "red/red",
    private: false,
    owner: {
      login: "red",
      id: 4625645,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ2MjU2NDU=",
      avatar_url: "https://avatars.githubusercontent.com/u/4625645?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/red",
      html_url: "https://github.com/red",
      followers_url: "https://api.github.com/users/red/followers",
      following_url: "https://api.github.com/users/red/following{/other_user}",
      gists_url: "https://api.github.com/users/red/gists{/gist_id}",
      starred_url: "https://api.github.com/users/red/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/red/subscriptions",
      organizations_url: "https://api.github.com/users/red/orgs",
      repos_url: "https://api.github.com/users/red/repos",
      events_url: "https://api.github.com/users/red/events{/privacy}",
      received_events_url: "https://api.github.com/users/red/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/red/red",
    description:
      "Red is a next-generation programming language strongly inspired by Rebol, but with a broader field of usage thanks to its native-code compiler, from system programming to high-level scripting and cross-platform reactive GUI, while providing modern support for concurrency, all in a zero-install, zero-config, single 1MB file! ",
    fork: false,
    url: "https://api.github.com/repos/red/red",
    forks_url: "https://api.github.com/repos/red/red/forks",
    keys_url: "https://api.github.com/repos/red/red/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/red/red/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/red/red/teams",
    hooks_url: "https://api.github.com/repos/red/red/hooks",
    issue_events_url:
      "https://api.github.com/repos/red/red/issues/events{/number}",
    events_url: "https://api.github.com/repos/red/red/events",
    assignees_url: "https://api.github.com/repos/red/red/assignees{/user}",
    branches_url: "https://api.github.com/repos/red/red/branches{/branch}",
    tags_url: "https://api.github.com/repos/red/red/tags",
    blobs_url: "https://api.github.com/repos/red/red/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/red/red/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/red/red/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/red/red/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/red/red/statuses/{sha}",
    languages_url: "https://api.github.com/repos/red/red/languages",
    stargazers_url: "https://api.github.com/repos/red/red/stargazers",
    contributors_url: "https://api.github.com/repos/red/red/contributors",
    subscribers_url: "https://api.github.com/repos/red/red/subscribers",
    subscription_url: "https://api.github.com/repos/red/red/subscription",
    commits_url: "https://api.github.com/repos/red/red/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/red/red/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/red/red/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/red/red/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/red/red/contents/{+path}",
    compare_url: "https://api.github.com/repos/red/red/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/red/red/merges",
    archive_url: "https://api.github.com/repos/red/red/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/red/red/downloads",
    issues_url: "https://api.github.com/repos/red/red/issues{/number}",
    pulls_url: "https://api.github.com/repos/red/red/pulls{/number}",
    milestones_url: "https://api.github.com/repos/red/red/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/red/red/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/red/red/labels{/name}",
    releases_url: "https://api.github.com/repos/red/red/releases{/id}",
    deployments_url: "https://api.github.com/repos/red/red/deployments",
    created_at: "2011-03-07T11:38:19Z",
    updated_at: "2021-09-08T17:09:02Z",
    pushed_at: "2021-09-08T17:08:56Z",
    git_url: "git://github.com/red/red.git",
    ssh_url: "git@github.com:red/red.git",
    clone_url: "https://github.com/red/red.git",
    svn_url: "https://github.com/red/red",
    homepage: "http://red-lang.org",
    size: 35607,
    stargazers_count: 4659,
    watchers_count: 4659,
    language: "Red",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 392,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 494,
    license: {
      key: "other",
      name: "Other",
      spdx_id: "NOASSERTION",
      url: null,
      node_id: "MDc6TGljZW5zZTA=",
    },
    forks: 392,
    open_issues: 494,
    watchers: 4659,
    default_branch: "master",
    score: 1.0,
    total_count: 642,
  },
  subscriptionsData: {
    subscriptions: [],
    isLoading: false,
  },
  contributorsData: {
    contributors: [],
    isLoading: true,
  },
  tagsData: {
    tags: [
      {
        name: "v0.6.4",
        zipball_url:
          "https://api.github.com/repos/red/red/zipball/refs/tags/v0.6.4",
        tarball_url:
          "https://api.github.com/repos/red/red/tarball/refs/tags/v0.6.4",
        commit: {
          sha: "755eb943ccea9e78c2cab0f20b313a52404355cb",
          url: "https://api.github.com/repos/red/red/commits/755eb943ccea9e78c2cab0f20b313a52404355cb",
        },
        node_id: "MDM6UmVmMTQ0OTc3MzpyZWZzL3RhZ3MvdjAuNi40",
      },
      {
        name: "v0.6.3",
        zipball_url:
          "https://api.github.com/repos/red/red/zipball/refs/tags/v0.6.3",
        tarball_url:
          "https://api.github.com/repos/red/red/tarball/refs/tags/v0.6.3",
        commit: {
          sha: "6a43c767fa2e85d668b83f749158a18e62c30f70",
          url: "https://api.github.com/repos/red/red/commits/6a43c767fa2e85d668b83f749158a18e62c30f70",
        },
        node_id: "MDM6UmVmMTQ0OTc3MzpyZWZzL3RhZ3MvdjAuNi4z",
      },
      {
        name: "v0.6.2",
        zipball_url:
          "https://api.github.com/repos/red/red/zipball/refs/tags/v0.6.2",
        tarball_url:
          "https://api.github.com/repos/red/red/tarball/refs/tags/v0.6.2",
        commit: {
          sha: "28e70714b59d4c5beb87a1555063d8d6c0e13a9a",
          url: "https://api.github.com/repos/red/red/commits/28e70714b59d4c5beb87a1555063d8d6c0e13a9a",
        },
        node_id: "MDM6UmVmMTQ0OTc3MzpyZWZzL3RhZ3MvdjAuNi4y",
      },
    ],
    isLoading: false,
  },
};
