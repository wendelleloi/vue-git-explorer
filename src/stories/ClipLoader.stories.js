import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  title: "components/ClipLoader",
  component: ClipLoader,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClipLoader },
  template: '<ClipLoader v-bind="$props"/>',
});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const NotLoading = Template.bind({});
NotLoading.args = {
  loading: false,
};
